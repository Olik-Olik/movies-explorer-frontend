import React, {useEffect, useState,} from "react";
import './index.css';
import Header from "./components/Header";

import Footer from "./components/Footer";

import AboutPage from "./components/AboutPage/AboutPage";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import NotFound_404 from "./components/NotFoundError/NotFound_404";


export default function App(props) {

    //const history = useHistory(); /////

    return (
            <>
               {/* <Header/>*/}
                <AboutPage/>
                <MoviesPage/>
                <NotFound_404/>

            <Footer/>
            </>
    )
}
