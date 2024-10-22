import db from "../config/dbConnection.js";
import bcrypt, { hash, compare } from 'bcrypt';

const retrieveUser = async (email, password) => {
    const collection = db.collection('user');
    const user = await collection.find({email: email}).toArray();
    // console.log(user);
    return (user[0]);
};

const login = async (req, res) => {
    if (req.session && (req.session.isLogged === undefined && !req.session.isLogged)) {
        if (req.body) {
            const {email, password} = req.body;
            if (!email || !password) {
                res.status(400).send('Invalid data, please enter the fields correctly');
                return ;
            }
            const user = await retrieveUser(email, password);
            if (user !== undefined) {
                const result = await bcrypt.compare(password, user.password);
                if (result === true) {
                    req.session._id = user.id;
                    req.session.isLogged = true;
                    res.send('Successfully logged in');
                } else {
                    res.status(401).send('Password is incorrect');
                }
            } else {
                res.status(401).send("User doesn't exist");
            }
        } else {
            res.status(400).send('Invalid data, please enter the fields correctly');
        }
    } else {
        res.status(200).send('User is already signed in, log out first');
    }
};

export default login;
