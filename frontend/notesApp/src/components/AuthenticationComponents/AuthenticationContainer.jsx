import React, { useEffect, useState } from "react";
import AuthenticationMethod from "./AuthenticationMethod.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import './authentication.css'

const AuthenticationContainer = () => {
    const [section, setSection] = useState("none");
    const [user, setUser] = useState({name: "", email: "", password: ""});

    let chosenSection;
    if (section === "none") {
        chosenSection = <AuthenticationMethod setSection={setSection} />
    } else if (section === "login") {
        chosenSection = <Login  setSection={setSection} />
    } else if (section === "register") {
        chosenSection = <Register setSection={setSection} />
    }
    return (
        <div id="authenticationContainer">
            <div id="backgroundBlur"></div>
            {chosenSection}
        </div>
    )
};

export default AuthenticationContainer;