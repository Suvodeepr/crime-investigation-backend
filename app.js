import express from "express";
import connectdb from "./db/connectdb.js";

import firroutes from "./routes/firroutes.js";
import userroutes from "./routes/userroutes.js";
import caseroutes from "./routes/caseroutes.js";
import suspectroutes from "./routes/suspectroutes.js";
import evidenceroutes from "./routes/evidenceroutes.js";
import authroutes from "./routes/authroutes.js";
const app = express();

const port = process.env.PORT || 3000;
const database_url = process.env.database_url || "mongodb://localhost:27017";

// connect database
connectdb(database_url);

// middleware
app.use(express.json());

// routes
app.use("/fir", firroutes);
app.use("/users", userroutes);
app.use("/cases", caseroutes);
app.use("/suspects", suspectroutes);
app.use("/evidence", evidenceroutes);
app.use("/auth", authroutes);

// server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});