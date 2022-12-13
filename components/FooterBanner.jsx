import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const FooterBanner = () => {
  var currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-banner-container">
        <div className="footer-content-row">
          <div className="footer-content-row-left">
            <div className="footer-content-col">
              <p className="footer-content-header">Inventory</p>
              <ul>
                <li><a href={'/Custom'}>Shop All 1 of 1's</a></li>
                <li><a href={'/Hoodies'}>Shop All Hoodies</a></li>
                <li><a href={'/Shirts'}>Shop All Shirts</a></li>
              </ul>
            </div>
            <div className="footer-content-col">
              <p className="footer-content-header">About / Help</p>
              <ul>
                <li><a href={'/About'}>About Us</a></li>
                <li><a href={'/About#Contact'}>Contact Us</a></li>
                <li><a href={'/About#Returns'}>Returns / Exchange</a></li>
                <li><a href={'/About#SizeGuide'}>Size Guide</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-content-row-right">
            <div className="footer-content-social-media-container">
              <p className="footer-content-header">Follow Us On Social Media</p>
              <p className='footer-social-media-icons'>
                <AiFillInstagram />
                <AiOutlineTwitter />
              </p>
            </div>
            <div className="footer-content-payment-methods-container">
              <p className="footer-content-header">Payment Methods</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright @ {currentYear} Ancre Apparel, LLC - All Rights Reserved
      </div>
    </>
  )
}

export default FooterBanner