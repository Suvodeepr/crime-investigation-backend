import express from "express";
const router = express.Router();
import casecontroller from "../controllers/casecontroller.js";

router.get("/", casecontroller.getalldoc);
router.post("/", casecontroller.createdoc);
router.get("/:id", casecontroller.getsingledocbyid);
router.put("/:id", casecontroller.updatedocbyid);
router.delete("/:id", casecontroller.deletedocbyid);

export default router;