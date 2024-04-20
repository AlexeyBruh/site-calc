import pic from '../images/Rectangle 3.svg'
import './Picture.css'

export default function Picture() {
    return (
        <div id='PicWall'>
            <img src={pic} alt="Картинка стены" id='Wall' />
        </div>
    )
}