import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    epicUsername: {
        type: String,
        unique: true
    },
    rankedStats: {
        type: {}
    }
});

export default mongoose.model("Player", playerSchema);
