import React from 'react'
import './popular.css'
import data_products from '../assets/Frontend_Assets/data'
import Item from '../items/item'

export const Popular = () => {
  return (
    <div className='popular'>

        <h1>Popular in Women</h1>
        <hr/>

        <div className='popular-items'>
            {data_products.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>

    </div>
  )
}

export default Popular