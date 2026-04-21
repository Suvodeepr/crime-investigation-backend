import mongoose from "mongoose";

const caseschema = new mongoose.Schema({
    firId: { type: mongoose.Schema.Types.ObjectId, ref: "firs" },
    officer: { type: String },
    status: { type: String, default: "open" },
    remarks: { type: String }
});

const casemodel = mongoose.model("cases", caseschema);

export default casemodel;