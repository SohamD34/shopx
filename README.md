# ShopX - E-Commerce Platform

ShopX is a full-stack e-commerce platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides features for both customers and administrators.

## Features

### Customer Features
- User authentication (Sign up/Login)
- Browse products by categories (Men, Women, Kids)
- Product details view with pricing
- Shopping cart management
- Secure checkout process
- Responsive design for all devices

### Admin Features
- Product management (Add/Remove products)
- Product image upload
- Product listing and inventory management
- Category management
- Real-time updates to product catalog

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Context API for state management
- CSS for styling
- Vite for development and building

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Multer for file uploads
- CORS for cross-origin resource sharing

## Project Structure

```
shopx/
├── frontend/                # Frontend React application
│   ├── public/             # Public assets
│   └── src/
│       ├── components/     # Reusable UI components
│       │   ├── assets/     # Frontend assets (images, icons)
│       │   ├── navbar/     # Navigation components
│       │   └── ...        # Other components
│       ├── context/        # React Context providers
│       └── pages/         # Page components
│
├── admin/                  # Admin dashboard application
│   ├── public/            # Admin public assets
│   └── src/
│       ├── components/    # Admin UI components
│       │   ├── addproduct/    # Product management
│       │   ├── listproduct/   # Product listing
│       │   └── ...
│       └── pages/        # Admin pages
│
└── backend/              # Backend Node.js server
    ├── upload/          # Uploaded files storage
    │   └── images/     # Product images
    └── index.js        # Main server file
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Installation Steps

1. Clone the repository
```bash
git clone https://github.com/SohamD34/shopx.git
cd shopx
```

2. Setup Backend
```bash
cd backend
npm install
# Create a .env file with your MongoDB connection string if needed
npm start
```

3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```

4. Setup Admin Dashboard
```bash
cd ../admin
npm install
npm run dev
```

### Default Ports (when running on local machine)
- Backend: http://localhost:4000
- Frontend: http://localhost:3000
- Admin Dashboard: http://localhost:5173

## Environment Variables

Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## API Endpoints

### Products
- GET `/allproducts` - Get all products
- POST `/addproduct` - Add a new product
- POST `/removeproduct` - Remove a product
- POST `/upload` - Upload product image

### User
- POST `/signup` - User registration
- POST `/login` - User login
- POST `/addtocart` - Add item to cart

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the Apache License - see the LICENSE file for details.
