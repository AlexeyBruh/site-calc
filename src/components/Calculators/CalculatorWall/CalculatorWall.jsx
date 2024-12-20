import "./CalculatorWall.css";
import { useState } from "react";
import picChMark from "../Checkmark1.png";
import axios from "axios";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import picBrick from "../Кирпичи.svg";
import picBrickWall from "../СтенаКирпичей.svg";

export default function CalculatorWall() {
  const [widtMat, setwidtMat] = useState("");
  const [widtWall, setwidtWall] = useState("");
  const [lengMat, setlengMat] = useState("");
  const [lengWall, setlengWall] = useState("");
  const [highMat, sethighMat] = useState("");
  const [highWall, sethighWall] = useState("");
  const [SizeMat, setSizeMat] = useState("milimetre");
  const [SizeWall, setSizeWall] = useState("milimetre");
  const [result, setResult] = useState("");

  const fetchCalculator = async () => {
    try {
      const response = await axios.post("http://localhost:8000/calculate", {
        widtMat,
        widtWall,
        lengMat,
        lengWall,
        highMat,
        highWall,
        SizeMat,
        SizeWall,
      });
      const result = response.data.result;
      setResult(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleWidthMatChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      setwidtMat(value);
    }
  };

  const handleWidthWallChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      setwidtWall(value);
    }
  };

  const handleLengthMatChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      setlengMat(value);
    }
  };

  const handleLengthWallChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      setlengWall(value);
    }
  };

  const handleHeightMatChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      sethighMat(value);
    }
  };

  const handleHeightWallChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      sethighWall(value);
    }
  };

  const handleCalculate = () => {
    fetchCalculator();
  };

  return (
    <div className="CalculatorWall" id="SectionCalcWall">
      <h1 className="HeadCalc">Одна стена</h1>
      <div>
        <div className="Calc">
          <span className="HeadName">Габариты материала (Кирпич)</span>
          <br />
          <span id="NameSize">Ширина:</span>
          <br />
          <input
            type="number"
            id="widtMat"
            value={widtMat}
            onChange={handleWidthMatChange}
          />
          <img src={picBrick} alt="Кирпичи" className="CalcPicDiv" />
          <br />
          <span id="NameSize">Длина:</span>
          <br />
          <input
            type="number"
            id="lengMat"
            value={lengMat}
            onChange={handleLengthMatChange}
          />{" "}
          <br />
          <span id="NameSize">Высота:</span>
          <br />
          <input
            type="number"
            id="highMat"
            value={highMat}
            onChange={handleHeightMatChange}
          />{" "}
          <br />
          <span id="NameSize">Еденица Измерения:</span> <br />
          <select
            id="SizeMat"
            value={SizeMat}
            onChange={(event) => setSizeMat(event.target.value)}
          >
            <option value="millimetre">мм</option>
            <option value="centimetre">см</option>
            <option value="metre">м</option>
          </select>
        </div>
        <div className="LineCalc"></div>
        <div className="Calc">
          <span className="HeadName">Габариты элемента строения (Стена)</span>
          <br />
          <span id="NameSize">Ширина:</span>
          <br />
          <img src={picBrickWall} alt="Кирпичи" className="CalcPicDiv" />
          <input
            type="number"
            id="widtWall"
            value={widtWall}
            onChange={handleWidthWallChange}
          />{" "}
          <br />
          <span id="NameSize">Длина:</span> <br />
          <input
            type="number"
            id="lengWall"
            value={lengWall}
            onChange={handleLengthWallChange}
          />{" "}
          <br />
          <span id="NameSize">Высота:</span>
          <br />
          <input
            type="number"
            id="highWall"
            value={highWall}
            onChange={handleHeightWallChange}
          />{" "}
          <br />
          <span id="NameSize">Еденицы Измерения:</span>
          <br />
          <select
            id="SizeWall"
            value={SizeWall}
            onChange={(event) => setSizeWall(event.target.value)}
          >
            <option value="millimetre">мм</option>
            <option value="centimetre">см</option>
            <option value="metre">м</option>
          </select>
        </div>
      </div>
      <div className="LineCalc"></div>
      <div className="Result">
        <div id="but">
          <button className="ButtonDone" onClick={handleCalculate}>
            <img src={picChMark} alt="" />
            Рассчитать
          </button>
        </div>
        <div>
          <span id="Result">Необходимо материалов: </span>
          <br />
          <input
            type="text"
            id="output"
            readOnly
            value={result ? result : "Заполните все поля"}
          />
        </div>
      </div>
    </div>
  );
}
