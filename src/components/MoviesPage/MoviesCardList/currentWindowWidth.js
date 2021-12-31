const widthExpandMap = {
    1280: { initialAmount: 12, moreAmount:4},
    768: { initialAmount: 8, moreAmount:2},
    320: { initialAmount: 4, moreAmount:2},
    0: { initialAmount: 4, moreAmount:2},
}

function getWindowWidth() {
    const {innerWidth: width} = window;
    return width;
}

export default function getExpandWidth() {
    const width = getWindowWidth();
    console.log('WDH: ' + width);
    const ewKeys = Object.keys(widthExpandMap).reverse();
    console.log('ewK: ' + ewKeys);
    for (const key of ewKeys) {
        console.log(key);
        if ( width >= key )  {
            console.log('ret: ' + widthExpandMap[key].initialAmount);
            return widthExpandMap[key];
        }
    }
    console.log("ЧЁто пошло не так, обратитесь к разработчику.");
}
