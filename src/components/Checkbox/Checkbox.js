import React from "react";
import './Checkbox.css';
import '../../index.css';

function Checkbox(props) {
return(
<div className ="tumb" >
    <input
        type="checkbox"
        className="tumb__checkbox"

        id = "korotkometrazh"
/*        checked = {props.korotkometrazh}*/

        onChange={props.handleCheckbox}
    />
</div>
)
}
export default Checkbox;

