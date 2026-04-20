import express from "express";
const router = express.Router();
import fircontroller from "../controllers/fircontroller.js";

router.get("/", fircontroller.getalldoc);
router.post("/", fircontroller.createdoc);
router.get("/:id", fircontroller.getsingledocbyid);
router.put("/:id", fircontroller.updatedocbyid);
router.delete("/:id", fircontroller.deletedocbyid);

export default router;