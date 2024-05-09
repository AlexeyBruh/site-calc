import './Header.css'
import Logo from '../Logo/Logo'

export default function Header() {
    return (
        <header>
            <Logo />
            <ul>
                <li><a href="#SectionMain" ><button>Главная</button></a></li>
                <li><a href="#SectionGuide"><button>Инструкция</button></a></li>
                <li><a href="#SectionCalc"><button>Калькулятор</button></a></li>
            </ul>
        </header>
    )
}