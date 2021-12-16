import React from "react";


import '../ProfilePage/ProfileSummaryPage.css';
import '../SignUpPage/SignUpHeader.css';
import './SignInHeader.css';
import '../Header.css';

import '../../index.css';
import logo from "../images/logo.svg";
import '../../index.css';

import SignInHeader from "./SignInHeader";
import Login from "./Login";
import Footer from "../Footer";
import Header from "../Header";

function SignInPage(props){
    return (
        <>
            <SignInHeader/>
            <Login/>
<Footer/>
        </>)}
export default SignInPage;