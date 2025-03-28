import "./App.scss";
import React from "react";
import ProductSearch from "./components/ProductSearch";
import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<ProductSearch />} />
      </Routes>
    </>
  );
}

export default App;
