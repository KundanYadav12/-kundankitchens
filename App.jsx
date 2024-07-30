import React from 'react';
import "./App.css";
import image1 from "./image/11-book.png";
import image2 from "./image/13-lotbook.png";
import Form from "./Form";
import Header from "./Header";
import Hero from "./Hero";
import Menu from "./Menu";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import CustomerReviews from './CustomerReviews';
import CustomCursor from "./CustomCursor";


function App() {
  return (     
      <div>
        <CustomCursor/>
      <Header/>
      <Hero/>
      <Menu/>
      <About/>
      <CustomerReviews/>
      <Contact/>
      <Footer/>
      </div>

  )
}

export default App
