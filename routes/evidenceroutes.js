import express from "express";
const router = express.Router();
import evidencecontroller from "../controllers/evidencecontroller.js";

router.get("/", evidencecontroller.getalldoc);
router.post("/", evidencecontroller.createdoc);
router.get("/:id", evidencecontroller.getsingledocbyid);
router.put("/:id", evidencecontroller.updatedocbyid);
router.delete("/:id", evidencecontroller.deletedocbyid);

export default router;