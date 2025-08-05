import React, { useEffect } from 'react'
import './listproduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

    const [allProducts, setAllProducts] = React.useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
        .then((res) => res.json())
        .then((data) => {setAllProducts(data)});
    }

    useEffect(() => {
        fetchInfo();
    }, []);         // [] - executed only once when component mounts

    
    const removeProduct = async (id) => {
        await fetch('http://localhost:4000/removeproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:id})})
            
            await fetchInfo();
    };
    

    return (
        <div className='list-product'>
            <h1>All Products List</h1>

            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>

            <div className="listproduct-all-products">
                <hr />
                {allProducts.map((product, index) => {
                    return <>
                    <div className="listproduct-format-main listproduct-format" key={index}>
                        <img className="listproduct-product" src={product.image} alt="" />
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <img onClick={()=>{removeProduct(product.id)}} className='listproduct-remove-icon' src={cross_icon} alt="" />
                    </div>
                    <hr/>
                    </>
                })}
            </div>
        </div>
    )
}

export default ListProduct