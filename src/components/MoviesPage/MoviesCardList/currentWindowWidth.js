const widthExpandMap = {
    1280: { initialAmount: 12, moreAmount:4},
    768: { initialAmount: 8, moreAmount:2},
    320: { initialAmount: 4, moreAmount:2},
    0: { initialAmount: 4, moreAmount:2},
}
/* window.innerWidth -это внутренняя ширина окна или,
точнее, видового окна (не включая панели инструментов, оконный хром и т. Д.; но включая пространство,
 занимаемое вертикальной полосой прокрутки, если таковая имеется).
 screen.width -это ширина экрана (а не только окна браузера).*/
/*получение ширины*/
function getWindowWidth() {
    const {innerWidth: width} = window;
    return width;
}
/*при изменении ширины чтобы колбек часто не срабатывал */
/*Нужно вставить ее в переменную состояния изменения ширины ######*/
let  changeWithSetTimeOut = setTimeout(() => getWindowWidth(window.innerWidth), 1000);

    export default function getExpandWidth() {
        const width = getWindowWidth();
        console.log('WDH: ' + width);
        const ewKeys = Object.keys(widthExpandMap).reverse();
        console.log('ewK: ' + ewKeys);
        for (const key of ewKeys) {
            console.log(key);
            console.log(typeof key);
            if (width >= key) {
                console.log('ret: ' + widthExpandMap[key].initialAmount);
                return widthExpandMap[key];
            }
        }
        console.log("ЧЁто пошло не так, обратитесь к разработчику.");
    }

