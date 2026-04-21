import mongoose from "mongoose";

const evidenceschema = new mongoose.Schema({
    caseId: { type: mongoose.Schema.Types.ObjectId, ref: "cases" },
    fileUrl: String,
    type: String,
    uploadedAt: { type: Date, default: Date.now }
});

const evidencemodel = mongoose.model("evidence", evidenceschema);

export default evidencemodel;