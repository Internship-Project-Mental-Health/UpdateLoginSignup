// import React from 'react'
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import HeaD from '../Components/ProductPage/Head/Head'
import Mid1 from '../Components/ProductPage/Mid1/Mid1'
import Mid2 from '../Components/ProductPage/Mid2/Mid2'
import Mid3 from '../Components/ProductPage/Mid3/Mid3'
import Mid4 from '../Components/ProductPage/Mid4/Mid4'
import Header from '../Components/Common/Header/Header'
import Our_Partners from '../Components/ProductPage/Our_Partners/Our_Partners'
import ProductCard from '../Components/ProductPage/ProductCard/ProductCard';
import FooterNew from '../Components/Common/Footer/FooterNew'

function HealthproductPage() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('/api/Products')
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, [])
  return (
    <>
      <Header />
      <h1 className='Contact_Us_HomePage'> 
        <span className='Word_background'>P</span>
        <span className='Word_background'>R</span>
        <span className='Word_background'>O</span>
        <span className='Word_background'>D</span>
        <span className='Word_background'>U</span>
        <span className='Word_background'>C</span>
        <span className='Word_background'>T</span>
        <span className='Word_background'>S</span>
    </h1>
      <HeaD />
      {
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.product_id}
            name={product.name}
            productImg={product.productImg}
            product={product}
            new_price={product.new_price}
          />
        ))
      }
      <Mid1 />
      <Mid2 />
      <Mid3 />
      <Mid4 />
      <Our_Partners />
      <FooterNew />
    </>
  )
}

export default HealthproductPage
