import jwt from "jsonwebtoken";

const SECRET_KEY = "mysecretkey";

const authmiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).send({ msg: "No token provided" });
        }

        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;

        next();

    } catch (error) {
        res.status(401).send({ msg: "Invalid token" });
    }
};

export default authmiddleware;