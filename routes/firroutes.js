import express from "express";
const router = express.Router();

import fircontroller from "../controllers/fircontroller.js";

// ✅ IMPORT MIDDLEWARE
import authmiddleware from "../middleware/authmiddleware.js";
import rolemiddleware from "../middleware/rolemiddleware.js";

// ✅ PROTECTED ROUTES

// GET all FIR (admin + police only)
router.get(
    "/",
    authmiddleware,
    rolemiddleware(["admin", "police"]),
    fircontroller.getalldoc
);

// CREATE FIR (public + police)
router.post(
    "/",
    authmiddleware,
    rolemiddleware(["public", "police"]),
    fircontroller.createdoc
);

// GET single FIR
router.get(
    "/:id",
    authmiddleware,
    fircontroller.getsingledocbyid
);

// UPDATE FIR (police only)
router.put(
    "/:id",
    authmiddleware,
    rolemiddleware(["police"]),
    fircontroller.updatedocbyid
);

// DELETE FIR (admin only)
router.delete(
    "/:id",
    authmiddleware,
    rolemiddleware(["admin"]),
    fircontroller.deletedocbyid
);

export default router;