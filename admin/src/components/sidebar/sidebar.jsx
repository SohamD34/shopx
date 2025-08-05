import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import addProductIcon from '../../assets/Product_Cart.svg' // Adjust the path as necessary
import listProductIcon from '../../assets/Product_list_icon.svg' // Adjust the path as necessary


const Sidebar = () => {
  return (
    <div className='sidebar'>
        
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={addProductIcon} alt="" />
                <p>Add Product</p>
            </div>
        </Link>


        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={listProductIcon} alt="" />
                <p>Product List</p>
            </div>
        </Link>
    
    </div>
  )
}

export default Sidebar