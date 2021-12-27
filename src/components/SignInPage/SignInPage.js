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

function SignInPage(props){
    return (
        <>
            <SignInHeader/>
            <main>
            <Login handleLogin={props.handleLogin}/>
            </main>
            <Footer/>
        </>)}
export default SignInPage;