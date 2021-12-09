import React, {useEffect, useState,} from "react";
import './index.css';
import Header from "./components/Header";

import Footer from "./components/Footer";

import AboutPage from "./components/AboutPage/AboutPage";


export default function App(props) {

    //const history = useHistory(); /////

    return (
        /*  который предоставит объект истории, который вы ищете, через ловушку.*/
            <>
                <Header/>
                <AboutPage/>

            <Footer/>
            </>
    )
}
