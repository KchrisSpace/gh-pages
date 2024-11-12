import React from "react";

class ColorCard extends React.Component {
    generateRandomColor() {
        const randomColor = Math.floor(Math.random() * 16777215); // 16777215 is FFFFFF in decimal
        return `rgba(${(randomColor >> 16) & 255},${(randomColor >> 8) & 255},${randomColor & 255},0.5)`;
    }
    handClick = (e) => {
        const text = e.target.innerText;
        console.log(text);
        this.copyToClipboard(text);
        e.target.classList.add('strikethrough');

       
    }
    copyToClipboard = (text) => {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    render() {
        const color = this.generateRandomColor();
        // console.log(color);
        return (


            <div className="color-card" >


                <div className="color-card__color" style={{ backgroundColor: color }} >
                    
                </div>
                <p className="color-card__text " id="color-card__text" onClick={this.handClick}> {color}</p>
            </div>


        );
    }
}

export default ColorCard;
