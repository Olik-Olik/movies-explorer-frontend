import React from 'react';
import Login from '../components/Login';
import Preloader from  '../components/Preloader';
import Techs from './AboutPage/Tech/Techs';
import Header from '../components/Header';
import HeaderSavedFilms from '../components/ProfilePage/HeaderSavedFilms';
import AboutMe from './AboutPage/AboutMe/AboutMe';
import Footer from  '../components/Footer';
import AboutProject from './AboutPage/AboutProject/AboutProject';
import NotFound_404 from './NotFoundError/NotFound_404';
import ResultMainSearch from './MoviesPage/ResultMainSearch/ResultMainSearch';
import ResultMainMore from './MoviesPage/ResultMainMore/ResultMainMore';
import Card from './ResultMain/Movies';
import Movies from '../components/ResultMain/Movies';
import MoviesCardList from './MoviesPage/MoviesCardList/MoviesCardList';
import Profile from '../components/Profile';
import SignUp from './ProfilePage/RezultRegister';
import Register from './SignUpPage/Register';
import SignUpHeader from './SignUpPage/SignUpHeader';
import HeaderRezultLoginWelcome from './SignInPage/SignInHeader';
import ButtonKnowMore from './AboutPage/ButtonKnowMore/ButtonKnowMore';
import BeginPage from './AboutPage/BeginPage/BeginPage';
import Logo from './Logo';
import Checkbox from './Checkbox/Checkbox';
import Burger from './AboutPage/BeginPage/BurgerMenu/Burger';
import Project from './AboutPage/ProjectPage/Project';
import '../components/MoviesSearch';
import '../components/HeaderInwork.css';
import './AboutPage/Tech/Techs.css';
import '../components/Header.css';
import '../components/Footer.css';
import '../components/Main.css';
import '../components/Checkbox/Checkbox.css';
/*import './AboutPage/AboutMe/AboutMe.css';*/
import './AboutPage/AboutProject/AboutProject.css';
import './MoviesPage/ResultMainSearch/ResultMainSearch.css';
import './MoviesPage/ResultMainMore/ResultMainMore.css';
import '../components/Preloader.css';
import './MoviesPage/MoviesCardList/MoviesCardList.css';
import '../components/MoviesSearch.css';
import '../components/Profile.css'
import  './ProfilePage/ProfileSummaryPage.css'
import  './SignUpPage/SignUpHeader.css';
import  './SignInPage/SignInHeader.css';
import './SignUpPage/Register.css';
import '../components/Logo.css';
import './AboutPage/ProjectPage/Project.css';
import './AboutPage/ButtonKnowMore/ButtonKnowMore.css';
import './AboutPage/BeginPage/BeginPage.css';
import '../index.css';
import './AboutPage/BeginPage/BeginPage.css';
import './AboutPage/BeginPage/BurgerMenu/Burger.css';

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
    <Preloader/>
   <HeaderSavedFilms/>
    <MoviesCardList>
    <Card/>
    </MoviesCardList>
    <Profile>
    </Profile>
   {/* <Login>
    </Login>*/}
    <SignUpHeader>
    </SignUpHeader>
<SignUpHeader>
</SignUpHeader>
    <HeaderRezultLoginWelcome>
    </HeaderRezultLoginWelcome>

   {/* <Register>
    </Register>*/}
    <Checkbox/>

</>)}
export default Main;
