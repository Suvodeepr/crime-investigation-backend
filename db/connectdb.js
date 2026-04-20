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

export default connectdb;