import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/Header/Header";
import Bigsales from "./components/Bigsales/Bigsales";
import Guide from "./components/Guide/Guide.js";
import Megadeals from "./components/Megadeals/Megadeals";
import Recommended from "./components/Recommended/Recommended";
import Toyssales from "./components/Toyssales/Toyssales";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Guide />
      <Megadeals />
      <Recommended />
      <Toyssales />
      <Bigsales />
      <Footer />
    </div>
  );
}

export default App;
