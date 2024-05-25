import "./Header.css";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <header>
      <Logo />
      <div className="navbar">
        <div className="Drop">
          <button className="Burger">&#9776;</button>
          <div className="ButtonsTop">
            <a href="#SectionMain">
              <button>Главная</button>
            </a>
            <a href="#SectionGuide">
              <button>Инструкция</button>
            </a>
            <a href="#SectionCalc">
              <button>Калькулятор</button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
