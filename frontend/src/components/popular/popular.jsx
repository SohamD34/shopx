import React, { useEffect} from 'react'
import { useState } from 'react'
import './popular.css'
// import data_products from '../assets/Frontend_Assets/data'
import Item from '../items/item'

export const Popular = () => {

    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/popularinwomen")
        .then((res) => res.json())
        .then((data) => setPopularProducts(data));
    }, [])

    return (
    <div className='popular'>

        <h1>Popular in Women</h1>
        <hr/>

        <div className='popular-items'>
            {popularProducts.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>

    </div>
  )
}

export default Popular