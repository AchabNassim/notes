import session from 'express-session';

const logout = (req, res) => {
    if (req.session && req.session._id) {
        req.session.destroy();
        res.send('Session destroyed successfully');
    } else {
        res.status(401).send('Unable to destroy session, user is not logged in');
    }
}

export default logout;