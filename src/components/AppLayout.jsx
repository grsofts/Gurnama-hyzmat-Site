// import React, { useState } from 'react';
import Header from './Header';
import { Outlet, useLocation } from "react-router-dom";
import Footer from './Footer';
import HiddenNavBar from './HiddenNavBar';
import HaveQuestion from './HaveQuestion';
import Header2 from './Header2';

export default function AppLayout({ children }) {
  const location = useLocation();
  return (
    <div className="page-wrapper">

        {location.pathname === "/home" ? (
        <>
          <Header />
          {/* <div className="preloader"></div> */}
        </>
      ) : (
        <Header2 />
      )}

        <HiddenNavBar />
          <div>
            <Outlet />
            {children}
          </div>
        <div className="scroll-to-top scroll-to-target" data-target=".site-header"><span className="fa fa-long-arrow-up"></span></div>
        {location.pathname === "/contacts" ? null : <HaveQuestion />}
        <Footer />
    </div>
  )
}