import React from 'react'
import Hero from '../components/hero/hero'
import Popular from '../components/popular/popular'
import Offers from '../components/offers/offers'
import NewCollections from '../components/newcollections/newcollections'
import Newsletter from '../components/newsletter/newsletter'
import Footer from '../components/footer/footer'

export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Shop;