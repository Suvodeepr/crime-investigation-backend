<<<<<<< HEAD
import express from "express";
const router = express.Router();

import fircontroller from "../controllers/fircontroller.js";

// routes
router.get("/", fircontroller.getalldoc);
router.post("/", fircontroller.createdoc);
router.get("/:id", fircontroller.getsingledocbyid);
router.put("/:id", fircontroller.updatedocbyid);
router.delete("/:id", fircontroller.deletedocbyid);

=======
import express from "express";
const router = express.Router();

import fircontroller from "../controllers/fircontroller.js";

// routes
router.get("/", fircontroller.getalldoc);
router.post("/", fircontroller.createdoc);
router.get("/:id", fircontroller.getsingledocbyid);
router.put("/:id", fircontroller.updatedocbyid);
router.delete("/:id", fircontroller.deletedocbyid);

>>>>>>> b143d3c2619de5e966c57a2675da4f77af42dd96
export default router;