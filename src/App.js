import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import CountryDetails from "./components/CountryDetails";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(false);
  const switchMode = () => {
    setTheme((prevState) => !prevState);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route
          path="/country/:countryname"
          element={
            <>
              <Header />
              <CountryDetails />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
