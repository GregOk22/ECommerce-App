import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client'; 


const CategoryBanner = ({ categoryBanner, bannerPosition }) => {
  return (
    <div>
      {bannerPosition == "left" ?
        <div className="category-banner-container category-text-left">
          <div className='category-banner-info-row category-banner-info-row-on-left'>
            <h3 className='category-banner-title'>{categoryBanner.title}</h3>

            {categoryBanner.infoText != null ? 
              <div className='category-banner-info-text'>
                <p>{categoryBanner.infoText}</p>
              </div> : null 
            }

            <Link href={`/products?category=${categoryBanner.redirectPage}`}>
              <button type="button" className='ancre-button'>
                <span>{categoryBanner.buttonText}</span>
              </button>
            </Link>
          </div>

          <img src={urlFor(categoryBanner.image)} className='category-banner-image' />
        </div>
      : 
        <div className="category-banner-container category-text-right">
          <img src={urlFor(categoryBanner.image)} className='category-banner-image' />

          <div className='category-banner-info-row category-banner-info-row-on-right'>
            <h3 className='category-banner-title'>{categoryBanner.title}</h3>

            {categoryBanner.infoText != null ? 
              <div className='category-banner-info-text'>
                <p>{categoryBanner.infoText}</p>
              </div> : null 
            }

            <Link href={`/products?category=${categoryBanner.redirectPage}`}>
              <button type="button" className='ancre-button'>
                <span>{categoryBanner.buttonText}</span>
              </button>
            </Link>
          </div>
        </div>
      }
    </div>
  )
}

export default CategoryBanner