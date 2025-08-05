import React, { useEffect } from 'react'
import './newcollections.css'
// import new_collection from '../assets/Frontend_Assets/new_collections'
import Item from '../items/item'

export const NewCollections = () => {

    const [new_collection, setNewCollection] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/newcollections')
        .then((response) => response.json())
        .then((data) => setNewCollection(data));
    }, []);

    return (
    <div className='newcollections'>
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