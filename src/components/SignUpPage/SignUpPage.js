import React from "react";
import '../../index.css';
import SignUpHeader from "./SignUpHeader";
import Register from "./Register";

function SignUpPage(props){
    return (
        <>
            <SignUpHeader/>
            <main>
            <Register handleRegister={props.handleRegister}
            info={props.info}/>
            </main>
        </>)}

export default SignUpPage;