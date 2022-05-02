import "./App.css";
import CountryDetail from "./components/CountryDetail";
import Layout from "./pages/Layout";
import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const RouterWrapper = (props) => {
  const params = useParams();
  return <CountryDetail params={params} {...props} />;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path=":name" element={<RouterWrapper />} />
      </Routes>
    </>
  );
}
export default App;
