import express from "express";
const router = express.Router();
import suspectcontroller from "../controllers/suspectcontroller.js";

router.get("/", suspectcontroller.getalldoc);
router.post("/", suspectcontroller.createdoc);
router.get("/:id", suspectcontroller.getsingledocbyid);
router.put("/:id", suspectcontroller.updatedocbyid);
router.delete("/:id", suspectcontroller.deletedocbyid);

export default router;