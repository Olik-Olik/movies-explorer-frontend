import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import BeginPage from "./BeginPage/BeginPage";
import Techs from "./Tech/Techs";
import '../../index.css';

import Footer from "../Footer";
import Header from "../Header";

function AboutPage(props){
    return (
        <>
            <Header/>
            <AboutMe>
            </AboutMe>
            <AboutProject/>
            <BeginPage/>
            <Techs/>
            <Footer/>
            </>)}
export default AboutPage;
