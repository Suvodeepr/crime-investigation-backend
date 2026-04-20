<<<<<<< HEAD
import express from "express";
import connectdb from "./db/connectdb.js";
import firroutes from "./routes/firroutes.js";

const app = express();
const port = process.env.PORT || 3000;
const database_url = process.env.database_url || "mongodb://localhost:27017";

// connect database
connectdb(database_url);

// middleware
app.use(express.json());

// routes
app.use("/fir", firroutes);

// server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
=======
import express from "express";
import connectdb from "./db/connectdb.js";
import firroutes from "./routes/firroutes.js";

const app = express();
const port = process.env.PORT || 3000;
const database_url = process.env.database_url || "mongodb://localhost:27017";

// connect database
connectdb(database_url);

// middleware
app.use(express.json());

// routes
app.use("/fir", firroutes);

// server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
>>>>>>> b143d3c2619de5e966c57a2675da4f77af42dd96
});