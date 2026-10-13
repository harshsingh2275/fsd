import React, { useState } from 'react'
import cat from '../assets/cat3.jpg'

function ImageManipulation() {
    const [catHeight, setCatHeight] = useState(100)
    const [catWidth, setCatWidth] = useState(100)
    const [red, setRed] = useState(0)
    
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    const [catAngle, setCatAngle] = useState(30)

    function increaseHeight() {
        setCatHeight(catHeight + 10)
    }

    function increaseWidth() {
        setCatWidth(catWidth + 10)
    }

    function changeBGColor() {
        setRed(Math.floor(Math.random() * 256))
        setGreen(Math.floor(Math.random() * 256))
        setBlue(Math.floor(Math.random() * 256))
    }

    function imageRotate() {
        setCatAngle(catAngle + 30)
        setCatHeight(catHeight + 10)
        setCatWidth(catWidth + 10)
        changeBGColor()
    }

    function reverseRotate() {
        setCatAngle(catAngle - 30)
        setCatHeight(Math.max(10, catHeight - 10))
        setCatWidth(Math.max(10, catWidth - 10))
        changeBGColor()
    }

    return (
        <div>
            <h2>Welcome to React App Development</h2>
            <h3>ImageManipulation</h3>

            <div style={{ height: '400px', width: '400px', border: '4px solid red', backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
                <img src={cat} height={catHeight} width={catWidth} style={{ transform: `rotate(${catAngle}deg)` }} alt="cat" />
            </div>

            <div>
                <button onClick={increaseHeight}>Increase Height</button>
                <button onClick={increaseWidth}>Increase Width</button>
                <button onClick={changeBGColor}>Change BG Color</button>
                <button onClick={imageRotate}>Image Rotate</button>
                <button onClick={reverseRotate}>Reverse Rotate</button>
            </div>
        </div>
    )
}

export default ImageManipulation