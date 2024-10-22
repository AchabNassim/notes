import db from "../config/dbConnection.js";

const updateNotes = async (req, res) => {
    if (req.session && req.session.isLogged != undefined && req.session.isLogged) {
        if (req.body) {
            const notes = req.body;
            // console.log(notes);
            if (!notes) {
                res.status(400).send('Invalid data, please enter the fields correctly');
                return ;
            }
            const collection = db.collection('user');
            await collection.updateOne({id: req.session._id}, {$set: {notes: notes}});
            res.send('Notes successfully updated');
        } else {
            res.status(400).send('Invalid data, please enter the fields correctly');
        }
    } else {
        res.status(401).send('User is not logged in to access the notes');
    }
}

export default updateNotes;