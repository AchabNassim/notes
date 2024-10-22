import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import isDbConnected from './middleware/isDbConnected.js';
import bodyParser from 'body-parser';
import router from './routes/router.js';
import cors from 'cors'

const app = express();

app.use(cors({
    credentials: true,
    origin: true
}));

app.use(session({
    secret: "secret",
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
        dbName: "session_db"
    })
}))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(isDbConnected);

app.use(router);

app.listen(3000, "0.0.0.0.0", () => {
    console.log("server running at http://0.0.0.0:3000");
});