import React from "react";
import './Checkbox.css';
import '../../index.css';

function Checkbox(props) {
    return (
        <div className="tumb">
            <input
                type="checkbox"
                onChange={props.handleCheckbox}
               /* checked={props.shortMeter} /!**!/*/
            />
        </div>
    )
}

export default Checkbox;
