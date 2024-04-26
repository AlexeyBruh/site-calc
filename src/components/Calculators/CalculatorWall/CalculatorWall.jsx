import "./CalculatorWall.css";
import { useState } from "react";
import picChMark from "../Checkmark1.png";

export default function CalculatorWall() {
  const [widtMat, setwidtMat] = useState("");
  const [widtWall, setwidtWall] = useState("");
  const [lengMat, setlengMat] = useState("");
  const [lengWall, setlengWall] = useState("");
  const [highMat, sethighMat] = useState("");
  const [highWall, sethighWall] = useState("");
  const [SizeMat, setSizeMat] = useState("milimetre");
  const [SizeWall, setSizeWall] = useState("milimetre");
  const [output, setOutput] = useState("");

  return (
    <div className="CalculatorWall">
      <h1 className="HeadCalc">Одна стена</h1>
      <div>
        <div className="Calc">
          <span className="HeadName">Габариты материала (Кирпич)</span>
          <span id="NameSize">Ширина:</span>
          <input
            type="number"
            id="widtMat"
            value={widtMat}
            onChange={(event) => setwidtMat(event.target.value)}
          />
          <span id="NameSize">Длина:</span>
          <input
            type="number"
            id="lengMat"
            value={lengMat}
            onChange={(event) => setlengMat(event.target.value)}
          />
          <span id="NameSize">Высота:</span>
          <input
            type="number"
            id="highMat"
            value={highMat}
            onChange={(event) => sethighMat(event.target.value)}
          />
          <span id="NameSize">Еденица Измерения:</span>
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
          <span id="NameSize">Ширина:</span>

          <input
            type="number"
            id="widtWall"
            value={widtWall}
            onChange={(event) => setwidtWall(event.target.value)}
          />
          <span id="NameSize">Длина:</span>
          <input
            type="number"
            id="lengWall"
            value={lengWall}
            onChange={(event) => setlengWall(event.target.value)}
          />
          <span id="NameSize">Высота:</span>
          <input
            type="number"
            id="highWall"
            value={highWall}
            onChange={(event) => sethighWall(event.target.value)}
          />
          <span id="NameSize">Еденицы Измерения:</span>
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
        <div  id="but">
          <button className="ButtonDone">
            <img src={picChMark} alt="" />
            Рассчитать
          </button>
        </div>
        <div>
          <span id="Result">Необходимо материалов: </span><br />
          <input
            type="text"
            id="output"
            readOnly
            value={output ? output : "Заполните все поля"}
          />
        </div>
      </div>
    </div>
  );
}
