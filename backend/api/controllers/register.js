import db from "../config/dbConnection.js";
import bcrypt, { hash } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const userExists = async (collectionName, email) => {
    const collection = db.collection(collectionName);
    const user = await collection.find({email: email}).toArray();
    console.log(user);
    return (user.length > 0 ? true : false);
}

const createUser = async (name, email, password) => {
    let id = uuidv4();
    let hashedPassword = await bcrypt.hash(password, 10);

    const user = {
        id: id,
        name: name,
        email: email,
        password: hashedPassword,
        notes: []
    }

    return (user);
}


const register = async (req, res) => {
    // checks if user is already logged in
    if (req.session && (req.session.isLogged === undefined && !req.session.isLogged)) {
        if (req.body) {
            // checks if all the values are present
            const {name, email, password} = req.body;
            if (!name || !email || !password) {
                res.status(400).send('Invalid data, please enter the fields correctly');
                return ;
            }
            // checks if user email already exists in db
            if (await userExists('user', email)) {
                res.status(403).send('user already exists');
                return ;
            }
            // inserts user in db
            const user = await createUser(name, email, password);
            const collection = db.collection('user');
            collection.insertOne(user);
            // creates a session for the user
            req.session._id = user.id;
            req.session.isLogged = true;
            res.send('Successfully added user');
        } else {
            res.status(400).send('Invalid data, please enter the fields correctly');
        }
    } else {
        res.status(401).send('User is already signed in, log out first');
    }
}

export default register;