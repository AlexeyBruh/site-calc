import './Logo.css'
import logo from './Калькулятор.svg'

export default function Logo() {
    return (
        <div>
            <a href="http://localhost:3000">
                <img src={logo} alt="калькулятор иконка" />
                <span className='MainName'>Калькулятор <br /> материалов</span>
            </a>
            
         </div>
    )
}