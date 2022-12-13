import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client'; 


const HomeBanner = ({ homeBanner }) => {
  return (
    <div className="home-banner-container">
      <div className="home-banner">
        <img src={urlFor(homeBanner.image)} className='home-banner-image' />

        <div className='home-banner-button-row'>
          {homeBanner.infoText != null ? 
            <div className='home-banner-info-container'>
              <p>GregTesting!!!</p>
            </div> : null }

          <Link href={`/products?category=${homeBanner.redirectPage}`}>
            <button type="button" className='ancre-button'>
              <span>{homeBanner.buttonText}</span>
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default HomeBanner