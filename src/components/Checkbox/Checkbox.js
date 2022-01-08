import React from "react";
import './Checkbox.css';
import '../../index.css';

function Checkbox(props) {
return(
<div className ="tumb" >
    <input
        type="checkbox"
        onClick={props.handleCheckbox} /*#####*/
    />
</div>
)
}
export default Checkbox;

