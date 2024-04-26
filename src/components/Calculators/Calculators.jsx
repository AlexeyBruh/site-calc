import { useState } from "react";
import "./Calculators.css";
import "./CalculatorWall/CalculatorWall.jsx";
import CalculatorWall from "./CalculatorWall/CalculatorWall.jsx";

export default function Calculators({ active, onChange }) {
  return (
    <div>
      <div className="GuideTop">Калькулятор</div>
      <div className="Calculators">
        <button className="Button" onClick={() => onChange("CalcWall")}>
          Калькулятор стены
        </button>
        <button className="Button" onClick={() => onChange("CalcHouse")}>
          Калькулятор дома
        </button>
      </div>
    </div>
  );
}
