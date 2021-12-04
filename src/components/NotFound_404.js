import React from "react";
import './NotFound_404.css';
import '../index.css';
function NotFound_404(){
return (
        <>
            <notFound_404 className="notFound_404">
                <div className="notFound_404__main">404</div>
                <div className="notFound_404__title">Страница не найдена</div>

           <button className="notFound_404__button" onClick={'{/* пока нету такого*/}'}>Назад</button>
            </notFound_404>
            </>

    );
}
export default NotFound_404;