import app from "./app";
import mongoose from "mongoose";


const start = async () => {
    try {

        app.listen(3000, () => {
            console.log(`Server is listening on port 3000...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
