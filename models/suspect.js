import mongoose from "mongoose";

const suspectschema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    crime: String,
    status: { type: String, default: "wanted" }
});

const suspectmodel = mongoose.model("suspects", suspectschema);

export default suspectmodel;