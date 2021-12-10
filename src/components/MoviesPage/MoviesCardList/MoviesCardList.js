import React from "react";
import  '../../MoviesPage/Card/Card.css';
import './MoviesCardList.css'
import '../../MoviesPage/Card/Card';
//import kino from '../../../images/kino.svg';
import Card from "../Card/Card";
function MoviesCardList(props){
return(
    <section className="moviesCard_list">
        <Card/> <Card/>
        <Card/> <Card/>
        <Card/> <Card/>
        <Card/> <Card/>
        <Card/> <Card/>
        <Card/> <Card/>
      {/*  <div className="movies-grid"></div>*/}
    </section>
)
}

export default MoviesCardList;
