import HeaderSavedFilms from "../MoviesPage/HeaderSavedFilms/HeaderSavedFilms";
import React from "react";
import "./ProfileSummaryPage.css";
import ProfileSummaryPage from "./ProfileSummaryPage";
import "../Profile.css";
import "../Header.css";

import '../../index.css';

function ProfilePage(props) {
    return(
        <>
        <HeaderSavedFilms/>
        <main>
        <ProfileSummaryPage handleUpdateProfile={props.handleUpdateProfile}
                            handleSubmitProfile={props.handleSubmitProfile}
                            info={props.info}
         />
        </main>
        </>
    )
}
export default ProfilePage;
