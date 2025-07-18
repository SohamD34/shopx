import React from 'react'
import './breadcrumb.css';
import arrow_icon from '../assets/Frontend_Assets/breadcrum_arrow.png'

function Breadcrumb(props) {

    const {products} = props;

    return (
        <div className='breadcrumb'>
            HOME <img src={arrow_icon} alt="arrow"/>
            SHOP <img src={arrow_icon} alt="arrow"/>
            {products.category}
            <img src={arrow_icon} alt="arrow"/>
            {products.name}
        </div>
    )
}

export default Breadcrumb;