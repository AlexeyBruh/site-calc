import Header from "./components/Header/Header.jsx";
import Calculators from "./components/Calculators/Calculators.jsx";
import CalculatorWall from "./components/Calculators/CalculatorWall/CalculatorWall.jsx";
import CalculatorHouse from "./components/Calculators/CalculatorHouse/CalculatorHouse.jsx";
import Mainpage from "./components/Mainpage/Mainpage.jsx";
import Guide from "./components/Guide/Guide.jsx";
import Footer from "./components/Footer/Footer.jsx";
import React, { useState } from "react";

export default function App() {
  const [tab, setTab] = useState();

  return (
    <>
      <Header />
      <main>
        <Mainpage />
        <Guide />
        <Calculators onChange={(current) => setTab(current)} />
        {tab == "CalcWall" && (
          <>
            <CalculatorWall />
          </>
        )}
        {tab == "CalcHouse" && (
          <>
            <CalculatorHouse />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
