<<<<<<< HEAD
import mongoose from "mongoose";

const connectdb = async (database_url) => {
    try {
        const db_options = {
            dbName: "crimedb"
        };

        await mongoose.connect(database_url, db_options);
        console.log("Database connected successfully");

    } catch (error) {
        console.log(error);
    }
};

=======
import mongoose from "mongoose";

const connectdb = async (database_url) => {
    try {
        const db_options = {
            dbName: "crimedb"
        };

        await mongoose.connect(database_url, db_options);
        console.log("Database connected successfully");

    } catch (error) {
        console.log(error);
    }
};

>>>>>>> b143d3c2619de5e966c57a2675da4f77af42dd96
export default connectdb;