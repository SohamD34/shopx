import React, { useContext } from 'react'
import './productdisplay.css'
import star_icon from '../assets/Frontend_Assets/star_icon.png'
import star_dull_icon from '../assets/Frontend_Assets/star_dull_icon.png'
import { ShopContext } from '../../context/shopcontext'

const ProductDisplay = (props) => {

    const { product } = props;
    const {addToCart} = useContext(ShopContext);

    return (
    <div className='productdisplay'>

        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>

            <div className="productdisplay-image">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>

        <div className="productdisplay-right">
            <h1>{product.name}</h1>

            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>

            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div> 
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>

            <div className="productdisplay-right-description">
                <p>
                A lightweighted, usually knitted pullover shirt, close fitting and with 
                a round neckline and short sleeves, worn as an undershirt or outer garment.
                </p>
            </div>

            <div className="productdisplay-right-size">
                <h1>Select size</h1>
                <div className="productdisplay-right-sizes">
                    <div className="productdisplay-right-size-item">S</div>
                    <div className="productdisplay-right-size-item">M</div>
                    <div className="productdisplay-right-size-item">L</div>
                    <div className="productdisplay-right-size-item">XL</div>
                    <div className="productdisplay-right-size-item">XXL</div>
                </div>
            </div>

            <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>

            <p className='productdisplay-right-category'><span>Category: </span>Women, Tshirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest</p>
        </div>
    </div>
    )
}

export default ProductDisplay