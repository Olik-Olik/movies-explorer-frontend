import HeaderSavedFilms from "../MoviesPage/HeaderSavedFilms/HeaderSavedFilms";
import React from "react";
import "./ProfileSummaryPage.css";
import ProfileSummaryPage from "./ProfileSummaryPage";
import "../Profile.css";
import "../Header.css";


import '../../index.css';
import Footer from "../Footer";
import SignInHeader from "../SignInPage/SignInHeader";
import Header from "../Header";

function ProfilePage(props) {
    return(
        <>
          {/*  <SignInHeader/>*/}
       {/*     <Header/>*/}
        <HeaderSavedFilms/>
        <ProfileSummaryPage/>
        </>
    )
}
export default ProfilePage;