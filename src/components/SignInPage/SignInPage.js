import React from "react";
import '../ProfilePage/ProfileSummaryPage.css';
import '../SignUpPage/SignUpHeader.css';
import './SignInHeader.css';
import '../Header.css';
import '../../index.css';
import '../../index.css';
import SignInHeader from "./SignInHeader";
import Login from "./Login";
import Footer from "../Footer";
import Register from "../SignUpPage/Register";

function SignInPage(props){
    return (
        <>
            <SignInHeader/>
            <main>
            <Login handleLogin={props.handleLogin}
                   info={props.info}/>
            </main>
            <Footer/>
        </>)}
export default SignInPage;
