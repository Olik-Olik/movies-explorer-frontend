import React from "react";
import './Footer.css';
import '../index.css';
import  {facebook_url} from '../utils/constants';
import  {github_url} from '../utils/constants';
function Footer(props) {
    return (
            <footer className="footer">
            <div className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</div>
                <div className= "footer__container-data">
                    <p className="footer__data">  ©  {new Date().getFullYear()} </p>
                 <div className="footer__container">
                    <a  target="_blank" rel="noopener noreferrer" className="footer__yandex" href = {github_url}>Яндекс.Практикум</a>
                    <a target="_blank" rel="noopener noreferrer" className="footer__gitHub" href= {github_url} >GitHub</a>
                    <a target="_blank" rel="noopener noreferrer" className="footer__facebook" href={facebook_url}>Facebook</a>
                    </div>

                </div>
            </footer>);}
        export default Footer;

//rel="noopener noreferrer"
// улучшают безопасность веб-сайта, но некоторые люди хотят игнорировать их, потому что думают, что они повлияют на поисковую оптимизацию их веб-сайта, но это всего лишь миф
/*export default Footer;*/
