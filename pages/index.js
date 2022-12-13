import React from 'react'
import { client } from '../lib/client';
import { Product, HomeBanner, HomepageMessage, CategoryBanner } from '../components';

const Home = ({productData, homeBannerData, homepageMessageData, categoryBannerData}) => {
  
  return (
    <>
      <HomeBanner homeBanner={homeBannerData.length && homeBannerData[0]} />
      <HomepageMessage homepageMessage={homepageMessageData.length && homepageMessageData[0]} />
      
      <div>
        {categoryBannerData?.sort((a, b) => a["sortOrder"] - b["sortOrder"]).map((category, index) => 
          <div key={category._id} className='category-container'>
            <CategoryBanner key={category._id} categoryBanner={category} bannerPosition={index % 2 == 0 ? "left" : "right"} />
            <div className='top-products-banner'>
              {productData?.map((product) => <Product key={product._id} product={product} />)}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const productData = await client.fetch(productQuery);

  const homeBannerQuery = '*[_type == "homeBanner"]';
  const homeBannerData = await client.fetch(homeBannerQuery);

  const homepageMessageQuery = '*[_type == "homepageMessage"]';
  const homepageMessageData = await client.fetch(homepageMessageQuery);

  const categoryBannerQuery = '*[_type == "categoryBanner"]';
  const categoryBannerData = await client.fetch(categoryBannerQuery);

  return {
    props: {productData, homeBannerData, homepageMessageData, categoryBannerData}
  }
}

export default Home