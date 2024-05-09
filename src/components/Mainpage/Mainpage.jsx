import "./Mainpage.css";
import pic from "../images/Строитель Главная.png";
import pic1 from "../images/БПК.png";

export default function Mainpage() {
  return (
    <div className="Mainpage" id="SectionMain">
      <div id="MainPic">
        <span>
          Рассчет строительных
          <br />
          материалов
          <br />
          <img src={pic1} alt="Картинка качеств" />
        </span>

        {/* <div id="Main">
          <img src={pic} alt="Картинка строитель" />
        </div> */}
      </div>
    </div>
  );
}
