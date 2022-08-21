import "./App.css";
import CountryDetail from "./components/CountryDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CountryList from "./components/CountryList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };
  return (
    <div className={`app ${darkMode ? "light" : ""}`}>
      <BrowserRouter>
        <Header switchMode={switchMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<CountryList darkMode={darkMode} />} />
          <Route
            path="/:countryCode"
            element={<CountryDetail darkMode={darkMode} />}
          />
        </Routes>
        <Footer darkMode={darkMode} />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}
export default App;
