import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authenticateToken = async (req, res, next) => {

    // console.log('we are here with', req.body);
    const autheHeader = req.headers.authorization;

    // console.log('authheader', autheHeader);

    if (!autheHeader) {
        return res.status(401).json({ msg: "Token Required" });
    }

    const [tokenType, token] = autheHeader.split(" ");
    // console.log('token: ', token);

    if (token === null) {
        return res.status(401).json({ msg: "Invalid Token" });
    }
    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error, user) => {
        if (error) {
            return res.status(403).json({ msg: "Invalid Token" });
        }
        req.user = user;
        console.log("Token Verified", user);
        next();
    });
};

export default authenticateToken;
