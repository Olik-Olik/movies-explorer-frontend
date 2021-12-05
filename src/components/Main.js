import React from 'react';
/*import Promo from '../components/
import NavTab from  '../components/

*/
/*import Header from '../components/Header';*/
/*import Portfolio from  '../components/*/
import Techs from  '../components/Techs';
import Header from '../components/Header';
import AboutMe from  '../components/AboutMe';
import Footer from  '../components/Footer';
import AboutProject from  '../components/AboutProject';
import NotFound_404 from './NotFound_404';
import Result_Main_Search from '../components/Result_Main/Result_Main_Search';
import Result_Main_More from '../components/Result_Main/Result_Main_More';
import Card from '../components/Result_Main/Card';
import Movies from '../components/Result_Main/Movies';

import '../components/Techs.css'
import '../components/Header.css'
import '../components/Footer.css';
import '../components/Main.css';
import '../components/AboutMe.css';
import '../components/AboutProject.css';
import '../components/Result_Main/Result_Main_Search.css'
import '../components/Result_Main/Result_Main_More.css'
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
    <Result_Main_Search>
    </Result_Main_Search>
    <Result_Main_More/>
    <Card/>
    <Movies/>

</>)}
export default Main;

    {/*   <Promo> </Promo>
    <NavTab></NavTab>
    <AboutProject></AboutProject>
    <Techs></Techs>
    <AboutMe></AboutMe>
     <Portfolio></Portfolio>*/}

