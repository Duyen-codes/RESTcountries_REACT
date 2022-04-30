import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Filter from "./components/Filter";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [theme, setTheme] = useState(false);
  const switchMode = () => {
    setTheme((prevState) => !prevState);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={((<Countries />), (<Filter />))} />
        <Route path=":countrydetail" element={<CountryDetails />} />
      </Routes>

      <Countries />
    </>
  );
}
export default App;
