import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import Filter from "./components/Filter";
import CountryDetails from "./components/CountryDetails";
import Layout from "./pages/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(false);
  const switchMode = () => {
    setTheme((prevState) => !prevState);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path=":countrydetail" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
