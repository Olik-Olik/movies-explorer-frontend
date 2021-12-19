import React from "react";
/*import MoviesPages from "./MoviesPages/MoviesPages";*/
import ResultMainMore from "./ResultMainMore/ResultMainMore";
import Card from "./Card/Card";
import ResultMainSearch from "./ResultMainSearch/ResultMainSearch";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "../Preloader";
import '../../index.css';

import Footer from "../Footer";
import Header from "../Header";
import HeaderSavedFilms from "./HeaderSavedFilms/HeaderSavedFilms";

/*
class MoviesPages extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }
    componentDidMount() {
        this.setState({isLoading: false})
    }
    render() {
        return(
            this.state.isLoading ?  <Preloader/> : <MoviesCardList/>
            <HeaderSavedFilms/>

            <ResultMainSearch/>
            {/!*    </Suspense>*!/}
            {/!* <Preloader/>*!/}
            <MoviesCardList/>
            <ResultMainMore/>
            <Footer/>
    }
        )
    }
export default MoviesPages;*/

function MoviesPages(props){
    return (
        <>
            <ResultMainMore/>
            <ResultMainSearch/>
            {/*<Card/>*/}
            <MoviesCardList/>
        </>
    )}
export default MoviesPages;
