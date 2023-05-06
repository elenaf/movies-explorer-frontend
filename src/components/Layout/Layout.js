import './Layout.css';

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout(props) {
    const { hasHeader = true, hasFooter = true, isLoggedIn, children } = props;
    
    return (
      <section className='layout'>
         <div className="content">
            {hasHeader && <Header isLoggedIn={isLoggedIn}/>}
            {children}
         </div>
         {hasFooter && <Footer />}
      </section>
    );
}