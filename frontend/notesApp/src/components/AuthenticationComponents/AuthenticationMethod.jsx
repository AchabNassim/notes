import React from "react";

const AuthenticationMethod = ({setSection}) => {
    return (
        <div id="authenticationMethod">
            <button className="choiceButton" onClick={() => setSection("register")} >Register</button>
            <button className="choiceButton" onClick={() => setSection("login")} >Login</button>
            {/* <button className="choiceButton" onClick={() => setSection("guest")} >Continue with guest account</button> */}
        </div>
    )
};

export default AuthenticationMethod;