import React from 'react'
import './newcollections.css'
import new_collection from '../assets/Frontend_Assets/new_collections'
import Item from '../items/item'

export const NewCollections = () => {
  return (
    <div className='newcollections'>
        <img src={new_collection} alt="New Collection" />
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            {new_collection.map((item, index) => {
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
     
    </div>
  )
}

export default NewCollections