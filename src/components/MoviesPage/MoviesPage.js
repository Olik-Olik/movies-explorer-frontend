import React, {useEffect, useState} from "react";
/*import MoviesPages from "./MoviesPages/MoviesPages";*/
import ResultMainMore from "./ResultMainMore/ResultMainMore";
import MovieCard from "./Card/MovieCard";
import ResultMainSearch from "./ResultMainSearch/ResultMainSearch";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "../Preloader";
import '../../index.css';

import Footer from "../Footer";
import Header from "../Header";
import HeaderSavedFilms from "./HeaderSavedFilms/HeaderSavedFilms";
import {render} from "react-dom";

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
            { this.state.isLoading ? ( <Preloader/> ): <MoviesCardList/>}
            <HeaderSavedFilms/>
            <ResultMainSearch/>
            <MoviesCardList/>
            <ResultMainMore/>
            <Footer/>
    }
    }
export default MoviesPages;*/

function MoviesPages(props){
    const [isLoading, setLoading] = useState(false);

  /*  useEffect(() => {
        console.log("Load finished!");
        //setLoading(false);
    }, [isLoading]);*/

    useEffect(() => {
        const loading = () =>{
            setLoading(false);}
        window.addEventListener("load", loading )
    }, [])


    return (
        <>
            <HeaderSavedFilms/>
            <main>
                <ResultMainSearch/>
<MoviesCardList/>
             {/*   {isLoading ? (
                    <Preloader/>) : (<MoviesCardList loading = {setLoading} />)}*/}
                <ResultMainMore/>
            </main>
        </>
    )}


export default MoviesPages;
