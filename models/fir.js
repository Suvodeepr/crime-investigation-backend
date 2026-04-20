import mongoose from "mongoose";

// defining schema
const firschema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, default: "pending" },
    date: { type: Date, default: Date.now }
});

// building model
const firmodel = mongoose.model("firdb", firschema);

export default firmodel;