import usermodel from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET_KEY = "mysecretkey";

class authcontroller {

    // REGISTER
    static register = async (req, res) => {
        try {
            const { name, email, password, role } = req.body;

            const user = await usermodel.findOne({ email });
            if (user) {
                return res.status(400).send({ msg: "User already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new usermodel({
                name,
                email,
                password: hashedPassword,
                role
            });

            await newUser.save();

            res.status(201).send({ msg: "User registered successfully" });

        } catch (error) {
            console.log(error);
        }
    };

    // LOGIN
    static login = async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await usermodel.findOne({ email });
            if (!user) {
                return res.status(400).send({ msg: "User not found" });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).send({ msg: "Wrong password" });
            }

            const token = jwt.sign(
                { userId: user._id, role: user.role },
                SECRET_KEY,
                { expiresIn: "1d" }
            );

            res.send({
                msg: "Login successful",
                token
            });

        } catch (error) {
            console.log(error);
        }
    };
}

export default authcontroller;