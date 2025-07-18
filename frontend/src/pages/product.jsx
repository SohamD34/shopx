import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/shopcontext';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumbs/breadcrumb';
import ProductDisplay from '../components/productdisplay/productdisplay';
import DescriptionBox from '../components/descriptionbox/descriptionbox';
import RelatedProducts from '../components/relatedproducts/relatedproducts';

export const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    return (
        <div>
            <Breadcrumb products={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
  
}

export default Product;