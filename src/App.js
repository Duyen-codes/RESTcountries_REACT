import "./App.css";
import CountryDetail from "./components/CountryDetail";
import Layout from "./pages/Layout";
import { useParams } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path=":name" element={<CountryList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
