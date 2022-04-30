import React from "react";
import Header from "../components/Header";
import CountryList from "../components/CountryList";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <>
      <Header />
      <CountryList />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;
