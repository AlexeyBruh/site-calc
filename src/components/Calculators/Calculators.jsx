import "./Calculators.css";
import "./CalculatorWall/CalculatorWall.jsx";
import PicOneWall from "../images/ИконкаОднаСтена.png";
import PicOneHouse from "../images/ИконкаДом.png";
import PicClose from "../images/Закрыть.svg";

export default function Calculators({ active, onChange }) {
  return (
    <div>
      <div className="GuideTop" id="SectionCalc">
        Калькулятор
      </div>
      <div className="Calculators">
        <div>
          <a href="#SectionCalcWall">
            <button
              title="Расчет одной стены"
              className="Button"
              onClick={() => onChange("CalcWall")}
            >
              <img src={PicOneWall} alt="Иконка" />
            </button>
          </a>
          <p>Одна стена</p>
        </div>
        <div>
          <a href="#SectionCalcHouse">
            <button
              title="Расчет дома"
              className="Button"
              onClick={() => onChange("CalcHouse")}
            >
              <img src={PicOneHouse} alt="Иконка" />
            </button>
          </a>
          <p>Дом</p>
        </div>
        <div className="Close">
          <button
            title="Закрыть калькулятор"
            className="Button"
            onClick={() => onChange("")}
          >
            <img src={PicClose} alt="Иконка" />
          </button>
          <p>Закрыть</p>
        </div>
      </div>
    </div>
  );
}
