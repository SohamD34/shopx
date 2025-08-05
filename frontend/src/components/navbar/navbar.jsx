import React, {use, useRef, useState} from 'react'
import './navbar.css'
import logo from '../assets/Frontend_Assets/logo.png'
import cart_icon from '../assets/Frontend_Assets/cart_icon.png'
import nav_dropdown from '../assets/Frontend_Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../context/shopcontext'


const Navbar = () => {

    const [menu, setMenu] = useState("shop"); 
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle("nav-menu-visible");
        e.target.classList.toggle('open');
    }

    return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="ShopX Logo" />
            <p>ShopX</p>
        </div>

        <img src={nav_dropdown} className='nav-dropdown' onClick={dropdown_toggle} alt="" />

        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}} className='nav-item'>
                <Link to='/' style={{ textDecoration: 'none'}}>
                    Shop
                </Link>
                {menu==="shop"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("men")}} className='nav-item'>
                <Link to='/men' style={{ textDecoration: 'none'}}>
                    Men
                </Link>
                {menu==="men"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("women")}} className='nav-item'>
                <Link to='/women' style={{ textDecoration: 'none'}}>
                    Women
                </Link>
                {menu==="women"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("kids")}} className='nav-item'>
                <Link to='/kids' style={{ textDecoration: 'none'}}>
                    Kids
                </Link>
                {menu==="kids"?<hr/>:<></>}
            </li>
        </ul>

        <div className="nav-login-cart">

            {localStorage.getItem('auth-token')
                ? (
                    <button onClick={()=>{
                        localStorage.removeItem('auth-token');
                        window.location.replace('/');
                    }}>
                    Logout</button>
                )
                : (
                    <Link to='/loginsignup'><button>Login</button></Link>
                )
            }
            <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar