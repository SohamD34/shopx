// MODULES

require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET
const PORT = process.env.PORT || 4000;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const path = require('path');
const { type } = require('os');
const app = express();                      // Initialising instance
app.use(express.json());                    // all requests will be in json format


//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
// CONFIGURATIONS



// CORS configuration
const corsOptions = {
    origin: [
        'https://sohamd34.github.io/shopx/',
        'http://localhost:3000',
        'http://localhost:5173'
    ],
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));                            // app with connect with frontend at port 4000



// Connect to MongoDB
mongoose.connect(MONGODB_URI)


// Image Storage Engine - Middleware to serve static files
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`);
    }
});

// any call to upload will use this storage engine
const upload = multer({storage: storage});




//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
// SCHEMAS


// Schema for creating products
const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
})


// Schema for creating users
const User = mongoose.model("Users", {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    cartData: {
        type: Object,
    },
    date:{
        type: Date,
        default: Date.now,
    }
});



//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
// APIs AND ENDPOINTS


// API for Express server
app.get('/', (request, response)=> {
    response.send("Express server is running");
})

// We will give all images at the /images endpoint - for easy access at frontend
app.use('/images', express.static('upload/images'));


// API endpoint to upload images
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${PORT}/images/${req.file.filename}`
    });
});


app.post('/addproduct', async (req, res) => {
    
    let products = await Product.find({});
    let id;
    if(products.length > 0) {
        id = products[products.length - 1].id + 1; 
    }
    else {
        id = 1; 
    }
    // prod_id is irrelevant - we assign id based on previous products

    const product = new Product({
        id:id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price, 
    });
    console.log(product);
    await product.save();
    console.log('Product saved');

    res.json({
        success: true,
        name: req.body.name,
    });
});


app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({
            id: req.body.id,
            // name: req.body.name,
        }
    );
    console.log('Product removed:', req.body.name);
    res.json({
        success: true,
        name: req.body.name,
    });
});


app.get('/allproducts', async (req, res) => {
    let allproducts = await Product.find({});
    console.log('All products fetched:', allproducts.length);
    console.log(allproducts);
    res.send(allproducts);
});


app.post('/signup', async (req, res) => {

    let check = await User.findOne({email: req.body.email});
    if(check){
        return res.status(400).json({success: false, error:"Email ID is associated with another exisiting account."});
    }
    
    let cart = {};
    for(let i=0; i<300; i++){
        cart[i] = 0;
    }

    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        isAdmin: false,
        cartData: cart,
    });
    await user.save();

    // JWT authentication token
    const data = {
        user:{
            id: user.id,
            isAdmin: user.isAdmin,
        }
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({
        success: true,
        authToken: authToken,
    });
});



app.post('/login', async (req, res) => {

    let user = await User.findOne({email: req.body.email});
    if(user){
        const passCompare = (user.password === req.body.password);
        if(passCompare){
            const data = {
                user:{
                    id: user.id,
                    isAdmin: user.isAdmin,
                }
            }

            const authToken = jwt.sign(data, JWT_SECRET);
            res.json({
                success: true,
                authToken: authToken
            })
        }
        else{
            res.json({
                success: false,
                error: "Incorrect password. Please try again."
            })
        }
    }
    else{
        res.json({
            success: false,
            error: "Email ID is not registered. Please sign up."
        })
    }
});


// Endpoint for new collections data
app.get('/newcollections', async (req, res) => {

    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log('New collections fetched');
    
    res.send(newcollection);
})

// Endpoint for Popular
app.get('/popularinwomen', async (req, res) => {
    
    let products = await Product.find({category: "women"});
    let popular_in_women = products.slice(0,4);
    console.log("Popular in women fetched");

    res.send(popular_in_women);
})


// Middleware to fetch user from token
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).json({ error: "Please authenticate using a valid token" });
    }
}

// Endpoint for adding items in Cart
app.post('/addtocart', fetchUser, async (req, res) => {
    try {
        const { itemId } = req.body;
        const userId = req.user.id;
        
        let user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }

        // Initialize cartData if it doesn't exist
        if (!user.cartData) {
            user.cartData = {};
        }

        // Increment the item count in cart
        user.cartData[itemId] = (user.cartData[itemId] || 0) + 1;
        
        await user.save();
        
        res.json({ success: true, cartData: user.cartData });
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});


app.listen(PORT, (error) => {
    if (!error){
        console.log(`Server is running smoothly on port ${PORT}`);
    }
    else{
        console.log('Error encountered while starting the server:', error);
    }
});
