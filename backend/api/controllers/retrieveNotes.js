import db from "../config/dbConnection.js";

const retrieveNotes = async (req, res) => {
    if (req.session && req.session.isLogged != undefined && req.session.isLogged) {
        const collection = db.collection('user');
        const user = await collection.find({id: req.session._id}).toArray();
        const notes = user[0].notes;
        res.send(notes);
    } else {
        res.status(401).send('User is not logged in to access the notes');
    }
}

export default retrieveNotes;