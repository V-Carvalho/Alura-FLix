import React from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NewVideo from "./pages/NewVideo/NewVideo"
import NewCategory from "./pages/NewCategory/NewCategory"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/newvideo" element={<NewVideo />} /> 
        <Route path="/newcategory" element={<NewCategory />} /> 
        <Route path="*" element={null} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
