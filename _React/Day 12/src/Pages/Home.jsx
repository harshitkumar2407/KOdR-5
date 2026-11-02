import React from 'react'
import { useState } from 'react';
import Cards from '../components/Cards';
import { useEffect } from 'react';

const Home = () => {
  const [products, setproducts] = useState([])

const fetchProducts = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
  } catch (error) {
    console.log("Error in fetching data", error);
  }
};
useEffect({fetchProducts},[])

  return (
    <div>
      
      <div>
        {/* {products[0].title} */}
        {products.map((product) =>{
          // <Cards product={product}/>
          console.log(product);
          
        })}
      </div>
    </div>
  )
}

export default Home