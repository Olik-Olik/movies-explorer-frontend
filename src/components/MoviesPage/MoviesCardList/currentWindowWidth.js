import {widthExpandMap} from "../../../utils/constants";

function getWindowWidth() {
    const {innerWidth: width} = window;
    return width;
}
//let  changeWithSetTimeOut = setTimeout(() => getWindowWidth(window.innerWidth), 1000);
    export default function getExpandWidth() {
        const width = getWindowWidth();
        const ewKeys = Object.keys(widthExpandMap).reverse();
        for (const key of ewKeys) {
            if (width >= key) {
                console.log('ret: ' + widthExpandMap[key].initialAmount);
                return widthExpandMap[key];
            }
        }
        console.log("ЧЁто пошло не так, обратитесь к разработчику.");
    }
