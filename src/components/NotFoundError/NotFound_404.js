import React from "react";
import './NotFound_404.css';
import {useHistory}  from "react-router-dom";
/*import { useNavigate } from 'react-router-dom';*/
import '../../index.css';

function NotFound_404(){
   /* const history = useNavigate();*/

    const history = useHistory();
  /*  react-router-dom v6 useHistory() is replaced by useNavigate().*/

return (
        <>
            <notFound_404 className="notFound_404">
                <div className="notFound_404__main">404</div>
                <div className="notFound_404__title">Страница не найдена</div>

           <button className="notFound_404__button" onClick={() => history.goBack()}>Назад</button>
            </notFound_404>
            </>
    );
}
export default NotFound_404;