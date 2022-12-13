import React from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import FooterBanner from './FooterBanner';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Ancre Apparel</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <FooterBanner />
      </footer>
    </div>
  )
}

export default Layout