import { useState } from 'react'
import './Calculator.css'

export default function Calculator() {
    const [widtMat, setwidtMat] = useState('')
    const [widtWall, setwidtWall] = useState('')
    const [lengMat, setlengMat] = useState('')
    const [lengWall, setlengWall] = useState('')
    const [highMat, sethighMat] = useState('')
    const [highWall, sethighWall] = useState('')
    const [SizeMat, setSizeMat] = useState('milimetre')
    const [SizeWall, setSizeWall] = useState('milimetre')
    const [output, setOutput] = useState('')

    function Res() {
        let length_brick = widtMat
        let width_brick = widtWall
        let height_brick = lengMat
        let length_wall = lengWall
        let width_wall = highMat
        let height_wall = highWall
        let Size_Mat = SizeMat
        let Size_Wall = SizeWall
        var option_brick = 1;
        var option_wall = 1;

        if (Size_Mat == "milimetre") { option_brick = 1 }
        else if (Size_Mat == "centimetre") { option_brick = 10 }
        else if (Size_Mat == "metre") { option_brick = 100 }

        if (Size_Wall == "milimetre") { option_wall = 1 }
        else if (Size_Wall == "сentimetre") { option_wall = 10 }
        else if (Size_Wall == "metre") { option_wall = 100 }


        function Calc(length_brick, width_brick, height_brick, length_wall, width_wall, height_wall, option_brick, option_wall) {
            return ((length_wall * option_wall) / (length_brick * option_brick) * (width_wall * option_wall) / (width_brick * option_brick) * (height_wall * option_wall) / (height_brick * option_brick))
        }
        return Calc(length_brick, width_brick, height_brick, length_wall, width_wall, height_wall, option_brick, option_wall)
    }


    return (
        <div className='Calculator'>
            <form>
                <div>
                    <p>
                        <span>Габариты материала (Кирпич)</span>
                        <span>Габариты элемента строения (Стена)</span>
                    </p>
                    <p>
                        <span id='NameSize'>Ширина</span>
                        <input type="number" id='widtMat' value={widtMat} onChange={(event) => setwidtMat(event.target.value)} />
                        <input type="number" id='widtWall' value={widtWall} onChange={(event) => setwidtWall(event.target.value)} />
                    </p>
                    <p>
                        <span id='NameSize'>Длина</span>
                        <input type="number" id='lengMat' value={lengMat} onChange={(event) => setlengMat(event.target.value)} />
                        <input type="number" id='lengWall' value={lengWall} onChange={(event) => setlengWall(event.target.value)} />
                    </p>
                    <p>
                        <span id='NameSize'>Высота</span>
                        <input type="number" id='highMat' value={highMat} onChange={(event) => sethighMat(event.target.value)} />
                        <input type="number" id='highWall' value={highWall} onChange={(event) => sethighWall(event.target.value)} />
                    </p>
                    <p>
                        <span id='NameSize'>Ед. Изм.</span>
                        <select id='SizeMat' value={SizeMat} onChange={(event) => setSizeMat(event.target.value)}>
                            <option value="millimetre">мм</option>
                            <option value="centimetre">см</option>
                            <option value="metre">м</option>
                        </select>

                        <select id='SizeWall' value={SizeWall} onChange={(event) => setSizeWall(event.target.value)}>
                            <option value="millimetre">мм</option>
                            <option value="centimetre">см</option>
                            <option value="metre">м</option>
                        </select>
                    </p>
                </div>
                    <div id='but'>
                <button onClick={event => setOutput(Res)}>Рассчитать</button>
                <p>
                    <span id='Result' >Необходимое количество материалов:   </span>
                    <input type="text" id="output" readOnly value={output ? output : 'Заполните все поля'} />
                </p>
            </div>
            </form>
        
        </div>
    )
}
