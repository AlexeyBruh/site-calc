import './Header.css'
import Logo from '../Logo/Logo'

export default function Header() {
    return (
        <header>
            <Logo />
            <ul>
                <li><button>Главная</button></li>
                <li><button>Инструкция</button></li>
                <li><button>Калькулятор</button></li>
            </ul>
        </header>
    )
}