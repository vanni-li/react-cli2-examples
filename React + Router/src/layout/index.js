import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';

const Layout = ({ children }) => (
  <>
  	<main id="main">
  		<Header />
  		{ children }
  		<Footer />
  	</main>
  </>
);


export const withLayout = (Component) => {
    return (props) => (
        <Layout>
            <Component {...props} />
        </Layout>
    )
};

export default Layout;