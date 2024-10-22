import db from "../config/dbConnection.js";

const isDbConnected = (req, res, next) => {
    if (db === null) {
        res.status(500);
        res.send("server internal error: couldn't connect to the database");
    } else {
        next();
    }
}

export default isDbConnected;