import React from 'react';
import { client } from '../lib/client';
import { Product } from '../components';
import { useRouter } from 'next/router';
import { AiOutlineDown } from 'react-icons/ai';


const Products = ({productData}) => {
  // Grab Values from URL Query String
  const { query } = useRouter();
  console.log("QS: ", {query});
  
  var pageTitle = 'All Products';
  if (query.category && query.category !== 'All') pageTitle = query.category;

  return (
    <div className='all-products-page-container'>
      <h1 className='all-products-title'>{pageTitle}</h1>
      <div className='all-products-options-row'>
        <span>Category <AiOutlineDown /></span>
        <span>Filter <AiOutlineDown /></span>
        <span>Sort <AiOutlineDown /></span>
      </div>
      <div className='all-products-container'>
        {productData?.map((product) => <Product key={product._id} product={product} />)}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const productData = await client.fetch(productQuery);

  return {
    props: {productData}
  }
}

export default Products