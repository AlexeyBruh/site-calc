import './Mainpage.css'
import pic from '../images/Строитель Главная.png'

export default function Mainpage() {
    return (
        <div className='Mainpage'>
            <div id='MainPic'>
                <span>Рассчет строительных<br />материалов</span>
                <img src={pic} alt="Картинка строитель" />
            </div>
        </div>
    )
}