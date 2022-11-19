import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Housing from "./pages/Housing";
import Error from "./pages/Error";
import About from "./pages/About";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./App.css";

const HousingId = () => {
  const { id } = useParams();
  return <div>House {id}</div>;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="/error" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
