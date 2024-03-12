import app from "./app";
import mongoose from "mongoose";
import env from "./util/validateEnv";


const start = async () => {
    try {
        // Connect to the MongoDB database using the connection string contained in the .env file
        await mongoose.connect(env.MONGO_URI);
        console.log('Successfully connected to the database');

        // Start the express app only if the connection is sucessful
        app.listen(env.PORT, () => {
            console.log(`Server is listening on port ${env.PORT}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
