import "./App.css";
import { Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Filter from "./components/Filter";

function App() {
  return (
    <>
      <Header />
      <Filter />
      <Countries />
    </>
  );
}

export default App;
