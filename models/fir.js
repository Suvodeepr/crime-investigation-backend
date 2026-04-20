<<<<<<< HEAD
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

=======
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

>>>>>>> b143d3c2619de5e966c57a2675da4f77af42dd96
export default firmodel;