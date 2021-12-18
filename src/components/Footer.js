import React from "react";
import './Footer.css';
import '../index.css';
import  facebook_url from 'constants';
import  github_url from 'constants';
function Footer(props) {
    return (
            <footer className="footer">
            <div className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</div>
                <div className= "footer__container-data">
                    <p className="footer__data">  ©  {new Date().getFullYear()} </p>
                 <div className="footer__container">
                    <a  target="_blank" rel="noopener noreferrer" className="footer__yandex" href = {"https://github.com/Olik-Olik"}>Яндекс.Практикум</a>
                    <a target="_blank" rel="noopener noreferrer" className="footer__gitHub" href={"https://github.com/Olik-Olik"}>GitHub</a>
                    <a target="_blank" rel="noopener noreferrer" className="footer__facebook" href={"https://www.facebook.com/profile.php?id=100000879196200"}>Facebook</a>
                    </div>

                </div>
            </footer>);}
        export default Footer;

//rel="noopener noreferrer"
// улучшают безопасность веб-сайта, но некоторые люди хотят игнорировать их, потому что думают, что они повлияют на поисковую оптимизацию их веб-сайта, но это всего лишь миф
/*export default Footer;*/
