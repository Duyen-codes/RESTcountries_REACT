import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import Filter from "./components/Filter";
import CountryDetails from "./components/CountryDetails";
import Layout from "./pages/Layout";

function App() {
  const [theme, setTheme] = useState(false);
  const switchMode = () => {
    setTheme((prevState) => !prevState);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Header />} />
        </Route>
        <Route path=":countrydetail" element={<CountryDetails />} />
      </Routes>
    </>
  );
}
export default App;
