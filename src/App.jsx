import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single-post" element={<SinglePost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
