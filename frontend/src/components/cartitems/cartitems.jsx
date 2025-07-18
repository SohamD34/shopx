import React from 'react'
import './cartitems.css'
import { useContext } from 'react'
import { ShopContext} from '../../context/shopcontext'
import remove_icon from '../assets/Frontend_Assets/cart_cross_icon.png'


const CartItems = () => {

    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);

    return (

        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            <hr />

            {all_product.map((item) => {
                if (cartItems[item.id] > 0) {
                    return (
                        <div key={item.id} className="cartitems-format cartitems-format-main">
                            <img src={item.image} alt={item.name} className='carticon-product-icon'/>
                            <p>{item.name}</p>
                            <p>${item.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[item.id]}</button>
                            <p>${item.new_price * cartItems[item.id]}</p>
                            <img src={remove_icon} onClick={() => removeFromCart(item.id)} alt="remove-icon" className='carticon-remove-icon' />
                        </div>
                    )
                }
                return null;
            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Sub-total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>

                <div className="cartitems-promocode">
                    <p>If you have a promo code, please enter it here.</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="Promo Code"/>
                        <button>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartItems