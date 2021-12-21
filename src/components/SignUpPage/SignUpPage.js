import React from "react";

import '../../index.css';

import SignUpHeader from "./SignUpHeader";
import Register from "./Register";
/*import Footer from "../Footer";*/

function SignUpPage(props){
    return (
        <>
            <SignUpHeader/>
            <main>
            <Register/>
            </main>
            {/*<Footer/>*/}
        </>)}
export default SignUpPage;