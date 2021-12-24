import React from "react";
import './Burger.css';
import '../../../../index.css';

function Burger(props){
    return(
        <>
            <burger className="burger">
                <nav className="burger__row">
                    <a className="burger__row-link" href="https://yandex.ru/maps" target="_blank">О проекте</a>
                    <a className="burger__row-link" href="https://yandex.ru/pogoda" target="_blank">Технологии</a>
                    <a className="burger__row-link" href="https://yandex.ru/pogoda" target="_blank">Студент</a>
                </nav>
            </burger>
        </>
    )}
export default Burger;