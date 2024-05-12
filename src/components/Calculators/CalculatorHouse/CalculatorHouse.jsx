import "./CalculatorHouse.css";
import { useState } from "react";
import picChMark from "../Checkmark1.png";
import axios from "axios";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import picBrick from "../Кирпичи.svg";
import picBrickWall from "../дом-кирпича.png";

export default function CalculatorWall() {
  const [ChoiceMat, setChoiceMat] = useState("");
  const [widtMat, setwidtMat] = useState("");
  const [lengMat, setlengMat] = useState("");
  const [highMat, sethighMat] = useState("");
  const [Brickwork, SetBrickwork] = useState("");
  const [Perimetre, SetPerimetre] = useState("");
  const [HighWall, setHighWall] = useState("");
  const [CountDoor, setCountDoor] = useState("");
  const [CountWindow, setCountWindow] = useState("");
  const [HighDoor, setHighDoor] = useState("");
  const [HighWindow, setHighWindow] = useState("");
  const [LengDoor, setLengDoor] = useState("");
  const [LengWindow, setLengWindow] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);

  const [result, setResult] = useState("");

  const fetchCalculator = async () => {
    try {
      const response = await axios.post("http://localhost:8000/calculateTwo", {
        ChoiceMat,
        widtMat,
        lengMat,
        highMat,
        Brickwork,
        Perimetre,
        HighWall,
        CountDoor,
        CountWindow,
        HighDoor,
        HighWindow,
        LengDoor,
        LengWindow,
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

  const handleLengthMatChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      setlengMat(value);
    }
  };

  const handleHeightMatChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      sethighMat(value);
    }
  };
  // const handleBrickworkChange = (event) => {
  //   const value = event.target.value;
  //   if (!isNaN(value) && Number(value) >= 0) {
  //     SetBrickwork(value);
  //   }
  // };
  const handlePerimetreChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      SetPerimetre(value);
    }
  };
  const handleHeightWallChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      setHighWall(value);
    }
  };
  const handleCountDoorChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      setCountDoor(value);
    }
  };
  const handleCountWindowChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      setCountWindow(value);
    }
  };
  const handleHighDoorChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      setHighDoor(value);
    }
  };
  const handleHighWindowChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      setHighWindow(value);
    }
  };
  const handleLengthDoorChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      setLengDoor(value);
    }
  };
  const handleLengthWindowChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      setLengWindow(value);
    }
  };

  const handleCalculate = () => {
    fetchCalculator();
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setChoiceMat(selectedValue);

    if (selectedValue === 'Одинарный') {
      setwidtMat('250');
      setlengMat('120')
      sethighMat('65')
      setInputDisabled(true);
    } else if(selectedValue === 'Полуторный') {
      setwidtMat('250');
      setlengMat('120')
      sethighMat('88')
      setInputDisabled(true);
    }else if (selectedValue === 'Двойной') {
      setwidtMat('250');
      setlengMat('120')
      sethighMat('130')
      setInputDisabled(true);
    }else if (selectedValue === 'Евроформат') {
      setwidtMat('250');
      setlengMat('85')
      sethighMat('65')
      setInputDisabled(true);
    }else {
      setwidtMat('');
      setlengMat('')
      sethighMat('')
      setInputDisabled(false);
    }
  };

  return (
    <div className="CalculatorHouse">
      <h1 className="HeadCalc">Одна стена</h1>
      <div>
        <div className="Calc">
          <span className="HeadName">Габариты материала (Кирпич)</span>
          <br />
          <span id="NameSize">Выбор материала</span>
          <br />
          <select id="ChoiceMat"  value={ChoiceMat} onChange={handleSelectChange}>
            <option value="Одинарный">Одинарный(250x120x65)</option>
            <option value="Полуторный">Полуторный(250x120x88)</option>
            <option value="Двойной">Двойной(250x120x130)</option>
            <option value="Евроформат">Евроформат(250x85x65)</option>
            <option value="">Свое значение</option>
          </select>{" "}
          <br />
          <span id="NameSize">Ширина:</span>
          <br />
          <img src={picBrick} alt="Кирпичи" className="CalcPicDiv" />
          <input
            type="number"
            id="widtMat"
            value={widtMat}
            onChange={handleWidthMatChange}
            disabled={inputDisabled}
          />{" "}
          <br />
          <span id="NameSize">Длина:</span> <br />
          <input
            type="number"
            id="lengMat"
            value={lengMat}
            onChange={handleLengthMatChange}
            disabled={inputDisabled}
          />{" "}
          <br />
          <span id="NameSize">Высота:</span> <br />
          <input
            type="number"
            id="highMat"
            value={highMat}
            onChange={handleHeightMatChange}
            disabled={inputDisabled}
          />
        </div>
        <div className="LineCalc"></div>
        <div className="Calc">
          <span className="HeadName">Габариты элемента строения (в метрах)</span> <br />
          <img src={picBrickWall} alt="Кирпичи" className="CalcPicDiv" />
          <span id="NameSize">Тип кладки:</span> <br />
          <select
            id="SizeMat"
            value={Brickwork}
            onChange={(event) => SetBrickwork(event.target.value)}
          >
            <option value=""></option>
            <option value="0.12">В половину кирпича</option>
            <option value="0.25">В один кирпич</option>
            <option value="0.38">В полтора кирпича</option>
            <option value="0.51">В два кирпича</option>
            <option value="0.64">В два с половиной кирпича</option>
          </select>{" "}
          <br />
          <span id="NameSize">Периметр всех стен:</span>
          <br />
          <input
            type="number"
            value={Perimetre}
            onChange={handlePerimetreChange}
          />{" "}
          <br />
          <span id="NameSize">Высота стен:</span> <br />
          <input
            type="number"
            value={HighWall}
            onChange={handleHeightWallChange}
          />{" "}
          <br />
          <div className="RowCalc">
            <div>
              <span id="NameSize">Количество дверей:</span>
              <br />
              <input
                type="number"
                id="lengWall"
                placeholder="По умолчанию 0"
                value={CountDoor}
                onChange={handleCountDoorChange}
              />{" "}
              <br />
            </div>
            <div>
              <span id="NameSize">Количество окон:</span>
              <br />
              <input
                type="number"
                placeholder="По умолчанию 0"
                id="lengWall"
                value={CountWindow}
                onChange={handleCountWindowChange}
              />{" "}
              <br />
            </div>
          </div>
          <div className="RowCalc">
            <div>
              <span id="NameSize">Высота двери:</span>
              <br />
              <input
                type="number"
                id="lengWall"
                value={HighDoor}
                onChange={handleHighDoorChange}
              />{" "}
              <br />
            </div>
            <div>
              <span id="NameSize">Высота окна:</span>
              <br />
              <input
                type="number"
                id="lengWall"
                value={HighWindow}
                onChange={handleHighWindowChange}
              />{" "}
              <br />
            </div>
          </div>
          <div className="RowCalc">
            <div>
              <span id="NameSize">Длина двери:</span>
              <br />
              <input
                type="number"
                id="lengWall"
                value={LengDoor}
                onChange={handleLengthDoorChange}
              />{" "}
              <br />
            </div>
            <div>
              <span id="NameSize">Длина окна:</span>
              <br />
              <input
                type="number"
                id="lengWall"
                value={LengWindow}
                onChange={handleLengthWindowChange}
              />{" "}
              <br />
            </div>
          </div>
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
