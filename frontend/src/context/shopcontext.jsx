import React, { createContext, useEffect } from 'react'
// import all_product from '../components/assets/Frontend_Assets/all_product'
import { useState } from 'react';

export const ShopContext = createContext(null);

// Context providers in React are components that use the Context API to share data (state, functions, etc.) across the component tree without having to pass props down manually at every level.
// They wrap child components and provide a value prop, making the context data accessible to any descendant component that consumes the context.

const getDefaultCart = () => {
    let cart = {};
    for (let index=0; index<300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [all_product, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
        .then((res) => res.json())
        .then((data) => setAllProducts(data));
    }, []);

    const addToCart = (itemIndex) => {

        // console.log('Adding to cart:', itemIndex);

        setCartItems((prev) => ({
            ...prev,
            [itemIndex]: prev[itemIndex] + 1
        }));
        
        if(localStorage.getItem('auth-token')){
            console.log('Adding to cart on server:', itemIndex);

            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    'Accept':'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'itemId':itemIndex
                })
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
        }
    }

    const removeFromCart = (itemIndex) => {
        setCartItems((prev) => ({
            ...prev,
            [itemIndex]: prev[itemIndex] - 1
        }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product[item];
                totalAmount += cartItems[item] * itemInfo.new_price;
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            totalItems += cartItems[item];
        }
        return totalItems;
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;