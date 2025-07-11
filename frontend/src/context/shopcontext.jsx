import React, { createContext } from 'react'
import all_product from '../components/assets/Frontend_Assets/all_product'

export const ShopContext = createContext(null);

// Context providers in React are components that use the Context API to share data (state, functions, etc.) across the component tree without having to pass props down manually at every level.
// They wrap child components and provide a value prop, making the context data accessible to any descendant component that consumes the context.

const ShopContextProvider = (props) => {
    const contextValue = {all_product};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;