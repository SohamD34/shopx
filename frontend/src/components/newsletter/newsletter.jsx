import React from 'react'
import './newsletter.css'

export const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and the latest news.</p>

        <div>
            <input type="email" placeholder='Enter your email address' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter;