import React from 'react'
import { client, urlFor } from '../../lib/client';
import Link from 'next/link';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ productData, allProductsData }) => {
    const { image, name, price, details, size } = productData;
    const { decQty, incQty, qty, onAddToCart } = useStateContext();

    return (
        <div>
            <div className='product-detail-container'>
                <div className='product-detail-images-container'> 
                    <ul className='product-detail-image-list'>
                        {image?.map((item, i) => (
                            <li className={ (i == 2 || i == 5) ? 'product-detail-image-large' : 'product-detail-image-small' } key={i}>
                                <img src={urlFor(item)} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='product-detail-desc-container'>
                    <div className='product-detail-desc'>
                        <h1 className='product-detail-title'>{name}</h1>
                        <p className='product-detail-price'>$ {price}</p>
                        <p className='product-detail-size-text'>Select Your Size</p>
                        <select className='product-detail-size-dropdown'></select>
                        <br></br>
                        <button type="button" className='ancre-button add-to-cart-button'
                        onClick={() => onAddToCart(productData)}>
                            <span>Add to Shopping Bag</span>
                        </button>
                        
                        {details ? 
                        <div>
                            <p className='product-detail-info-text'>Description</p>
                            <p className='product-detail-text'>{details}</p>
                        </div> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }

}

export const getStaticProps = async ({ params: { slug }}) => {
    const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productData = await client.fetch(productQuery);

    const allProductsQuery = '*[_type == "product"]'
    const allProductsData = await client.fetch(allProductsQuery);
  
    return {
      props: {productData, allProductsData}
    }
  }

export default ProductDetails