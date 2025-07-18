import React from 'react'
import './descriptionbox.css'

const DescriptionBox = () => {
    return (
    <div className='descriptionbox'>

        <div className='descriptionbox-title'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
        </div>

        <div className="descriptionbox-description">
            <p>
                An e-commerce website is an online platform that allows businesses to sell products or services directly to consumers over the internet. 
                It typically features product listings, shopping carts, secure payment gateways, and user accounts. 
                E-commerce websites can range from small online stores to large marketplaces, providing a convenient way for customers to browse and purchase items from the comfort of their homes.
                They facilitate transactions through various payment methods, including credit cards, digital wallets, and bank transfers.
                E-commerce websites often include features like product reviews, customer support, and order tracking to enhance the shopping experience.
            </p>

            <p>
                E-commerce websites can also incorporate advanced technologies such as artificial intelligence for personalized recommendations, chatbots for customer service, and analytics tools to track user behavior and sales performance.
                They play a crucial role in the modern retail landscape, enabling businesses to reach a global audience and operate 24/7.
                With the rise of mobile commerce, many e-commerce sites are optimized for mobile devices, allowing users to shop on smartphones and tablets.
                Overall, e-commerce websites have transformed the way consumers shop, making it easier and more convenient
            </p>
        </div>
    </div>
    )
}

export default DescriptionBox