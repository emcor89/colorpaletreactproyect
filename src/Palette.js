import React, { Component } from "react";
import ColorBox from "./ColorBox";
import './Palette.css';

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
        ))
        return (
            <div className="Palette">
                {/* Nav bar goes heree */}
                <div className="Palette-colors">
                    <h1>Color Boxes</h1>
                    {colorBoxes}
                </div>
                {/* footer go here */}
            </div>
        )
    }

}

export default Palette;