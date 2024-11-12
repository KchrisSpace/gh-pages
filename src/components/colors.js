import React from "react";
import ColorCard from "./color-card";
class Colors extends React.Component {
    newArray = new Array(18).fill(0);
    render() {
        return (
            <div className="colors">
                {
                    this.newArray.map((item, index) => {
                        return <ColorCard key={index} />
                    })
                }
            </div>
        )
    }
}
export default Colors;