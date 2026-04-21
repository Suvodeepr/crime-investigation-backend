import express from "express";
const router = express.Router();
import usercontroller from "../controllers/usercontroller.js";

router.get("/", usercontroller.getalldoc);
router.post("/", usercontroller.createdoc);
router.get("/:id", usercontroller.getsingledocbyid);
router.put("/:id", usercontroller.updatedocbyid);
router.delete("/:id", usercontroller.deletedocbyid);

export default router;