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
    for (const [key, value] of Object.entries(widthExpandMap)) {
        console.log(key, value);
        if ( width >= key )  return value;
    }
    console.log("ЧЁто пошло не так, обратитесь к разработчику.");
}
