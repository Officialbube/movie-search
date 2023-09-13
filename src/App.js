import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import NavBar from "./components/navBar/NavBar";
import './App.css'



function App() {
  return (
    <div className="app">
      <Header/>
      <Layout/>
      <Footer/>
      
    </div>
  );
}

export default App;
