import React from "react";
import Header from "../components/Header";
import CountryList from "../components/CountryList";
import Footer from "../components/Footer";
import ToTopButton from "../components/ToTopButton";

const Layout = () => {
  return (
    <>
      <Header />
      <CountryList />
      <Footer />
      <ToTopButton />
    </>
  );
};

export default Layout;
