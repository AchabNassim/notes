import React, {useState, useEffect, useContext} from "react";
import { Context } from "../../App.jsx";

const Register = ({setSection}) => {
    const [user, setUser] = useState({name: "", email: "", password: ""});
    const [name, setName] = useState("");
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
        setUser({ name: name, email: email, password: password });
    }

    useEffect(() => {
        const authenticate = async () => {
            try {
                const response = await fetch("http://localhost:3000/register", {
                    credentials: "include",
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                });
                if (response.status === 200) {
                    setIsLogged(true);
                } else {
                    alert("Couldn't register, please fill the form fields correctly");
                }
            } catch (e) {
                // alert("Couldn't register, please fill the form fields correctly");
            }
        }
        if (isSent) {
            console.log("entered");
            authenticate();
        }
    }, [user]);

    return (
        <div id="registerContainer">
            <form onSubmit={handleSubmit}>
                <input type="text" className="inputField" placeholder="Name" onChange={(e) => handleChange(e, setName)} />
                <input type="email" className="inputField" placeholder="Email" onChange={(e) => handleChange(e, setEmail)} />
                <input type="password" className="inputField" placeholder="Password" onChange={(e) => handleChange(e, setPassword)} />
                <input type="submit" className="inputButton" value="Submit" onSubmit={handleSubmit} />
                <span className="backAction" onClick={() => setSection("none")}>back</span>
            </form>     
        </div>
    )
};

export default Register;