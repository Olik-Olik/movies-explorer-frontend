import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import ProjectPage from "./ProjectPage/Project";
import Techs from "./Tech/Techs";
import '../../index.css';

import Footer from "../Footer";
import Header from "../Header";
/*import Project from "./ProjectPage/Project";*/

function AboutPage(props){
    return (
        <>
            <Header/>
            <main>
            <ProjectPage/>
            <AboutProject/>
            <Techs/>
             <AboutMe/>
            </main>
            <Footer/>
            </>)}
export default AboutPage;
