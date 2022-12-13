import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client'; 


const HomepageMessage = ({ homepageMessage }) => {
  var imageUrl = urlFor(homepageMessage.backgroundImage).url();
  var containerStyle = {
    backgroundImage: "url(" + imageUrl + ")"
  }
  return (
    <div className="homepage-message-container">
        <div className='homepage-message-row' style={containerStyle}>
            <div className='homepage-message'>
                {homepageMessage.line1 != null ? 
                    <p className='homepage-message-line-1'>{homepageMessage.line1}</p> : null 
                }
                {homepageMessage.line2 != null ? 
                    <p className='homepage-message-line-2'>{homepageMessage.line2}</p> : null
                }
                {homepageMessage.line3 != null ? 
                    <p className='homepage-message-line-3'>{homepageMessage.line3}</p> : null
                }
            </div>
        </div>
    </div>
  )
}

export default HomepageMessage