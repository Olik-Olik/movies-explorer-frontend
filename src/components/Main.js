import React from 'react';
import Login from '../components/Login';
import Preloader from  '../components/Preloader';
import Techs from './AboutPage/Tech/Techs';
import Header from '../components/Header';
import HeaderInwork from '../components/HeaderInwork';
import AboutMe from './AboutPage/AboutMe/AboutMe';
import Footer from  '../components/Footer';
import AboutProject from './AboutPage/AboutProject/AboutProject';
import NotFound_404 from './NotFound_404';
import ResultMainSearch from '../components/ResultMain/ResultMainSearch';
import ResultMainMore from '../components/ResultMain/ResultMainMore';
import Card from './ResultMain/Card';
import Movies from '../components/ResultMain/Movies';
import MoviesCardList from '../components/MoviesCardList';
import Profile from '../components/Profile';
import RezultRegister from '../components/RezultRegister';
import Register from '../components/Register';
import HeaderRezultRegisterWelcome from '../components/HeaderRezultRegisterWelcome';
import HeaderRezultLoginWelcome from '../components/HeaderResultLoginWelcome';
import ButtonKnowMore from '../components/ButtonKnowMore';
import BeginPage from './AboutPage/BeginPage/BeginPage';
import Logo from './Logo';
import Burger from '../components/Burger';
import Project from './AboutPage/ProjectPage/Project';
import '../components/MoviesSearch';
import '../components/HeaderInwork.css';
import './AboutPage/Tech/Techs.css';
import '../components/Header.css';
import '../components/Footer.css';
import '../components/Main.css';
/*import './AboutPage/AboutMe/AboutMe.css';*/
import './AboutPage/AboutProject/AboutProject.css';
import '../components/ResultMain/ResultMainSearch.css';
import '../components/ResultMain/ResultMainMore.css';
import '../components/Preloader.css';
import '../components/MoviesCardList.css';
import '../components/MoviesSearch.css';
import '../components/Profile.css'
import  '../components/RezultRegister.css'
import  '../components/HeaderRezultRegisterWelcome.css';
import  '../components/HeaderResultLoginWelcome.css';
import '../components/Register.css';
import '../components/Logo.css';
import './AboutPage/ProjectPage/Project.css';
import '../components/ButtonKnowMore.css';
import './AboutPage/BeginPage/BeginPage.css';
import '../index.css';
import './AboutPage/BeginPage/BeginPage.css';
import '../components/Burger.css';

 function Main(props){
         return (
             <>
             <Burger> </Burger>
<Project/>
    <BeginPage> </BeginPage>
    <Logo/>
    <ButtonKnowMore> </ButtonKnowMore>
    <Header/>
    <AboutMe/>
    <Techs> </Techs>
    <AboutProject/>
    <Footer>
    </Footer>
    <NotFound_404/>
    <ResultMainSearch>
    </ResultMainSearch>
    <ResultMainMore/>
    <Card/>
    <Movies/>
    <Preloader> </Preloader>
   <HeaderInwork> </HeaderInwork>
    <MoviesCardList>
        <Card/>
    </MoviesCardList>
    <Profile>
    </Profile>
   {/* <Login>
    </Login>*/}
    <RezultRegister>
    </RezultRegister>
<HeaderRezultRegisterWelcome>
</HeaderRezultRegisterWelcome>

    <HeaderRezultLoginWelcome>
    </HeaderRezultLoginWelcome>

    <Register>
    </Register>

</>)}
export default Main;
