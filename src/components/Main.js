import React from 'react';
import Login from '../components/Login';
import Preloader from  '../components/Preloader';
import Techs from  '../components/Techs';
import Header from '../components/Header';
import HeaderInwork from '../components/HeaderInwork';
import AboutMe from  '../components/AboutMe';
import Footer from  '../components/Footer';
import AboutProject from  '../components/AboutProject';
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
import '../components/MoviesSearch';
import '../components/HeaderInwork.css';
import '../components/Techs.css';
import '../components/Header.css';
import '../components/Footer.css';
import '../components/Main.css';
import '../components/AboutMe.css';
import '../components/AboutProject.css';
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
import '../index.css';

 function Main(props){
         return (
<>
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
