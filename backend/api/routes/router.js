import { Router } from "express";
import register from "../controllers/register.js";
import login from "../controllers/login.js";
import logout from "../controllers/logout.js";
import retrieveNotes from "../controllers/retrieveNotes.js";
import updateNotes from "../controllers/updateNotes.js";

const router = Router();

// route for registration, user can only register if he's not logged in, user doesn't already exist and form data is correct. creates session
router.post('/register', register);

// route for login, user can only login if he's not logged in, user and password match. creates session
router.post('/login', login);

// route for logout, destroy session if it exists
router.get('/logout', logout);

// route for note retrieval, gets all the notes of the logged in user
router.get('/notes', retrieveNotes);

// route for note update, since notes is an embedded object, it updates the whole notes object rather than just a specific one
router.put('/update', updateNotes);

export default router;