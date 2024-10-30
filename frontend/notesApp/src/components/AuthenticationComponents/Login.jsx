import React, { useState, useEffect, useContext} from "react";
import { Context } from "../../App.jsx";

const Login = ({setSection}) => {
    const [user, setUser] = useState({email: "", password: ""});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSent, setIsSent] = useState(false);
    const {isLogged, setIsLogged} = useContext(Context);

    const handleChange = (e, setValue) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSent(true);
        setUser({email: email, password: password });
    }

    useEffect(() => {
        const authenticate = async () => {
            try {
                const response = await fetch("http://localhost:3000/login", {
                    credentials: "include",
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                });
                console.log (response.status);
                if (response.status === 200) {
                    console.log("works!");
                    setIsLogged(true);
                } else {
                    alert("Couldn't login, please fill the form fields correctly");
                }
            } catch (e) {
                // alert("Couldn't login, please fill the form fields correctly");

            }
        }
        if (isSent) {
            authenticate();
        }
    }, [user]);

    return (
        <div id="loginContainer" >
            <form onSubmit={handleSubmit}>
                <input type="email" className="inputField" placeholder="Email" onChange={(e) => handleChange(e, setEmail)} />
                <input type="password" className="inputField" placeholder="Password" onChange={(e) => handleChange(e, setPassword)} />
                <input type="submit" className="inputButton" value="Submit"  />
                <span className="backAction" onClick={() => setSection("none")}>Back</span>
            </form >
        </div>
    )
};

export default Login;