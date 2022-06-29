var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Hiteshkumar';

const fetchagent = (req, res, next) => {
    // Get the agent from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.agent = data.agent;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}


module.exports = fetchagent;