import express from "express";
const router = express.Router();

import authcontroller from "../controllers/authcontroller.js";

router.post("/register", authcontroller.register);
router.post("/login", authcontroller.login);

export default router;