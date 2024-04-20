import Header from "./components/Header/Header.jsx";
import Calculator from "./components/Calculator/Calculator.jsx";
import Picture from "./components/Picture/Picture.jsx";
import Mainpage from "./components/Mainpage/Mainpage.jsx"
import Guide from "./components/Guide/Guide.jsx";
import Footer from "./components/Footer/Footer.jsx";
import React from "react";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Mainpage />
        <Guide />
        <Calculator />
      </main>
      <Footer />
    </>
  );
}
