import React from "react";

//props.cardData.duration
function TimeConvert(min) {
    let hours = Math.trunc(min/60);
    let minutes = min % 60;
    return hours + 'ч  ' + minutes + 'м';
}
export default TimeConvert;