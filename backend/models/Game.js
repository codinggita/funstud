import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    isPopular: { type: Boolean, default: false },
    playerCount: { type: Number, default: 0 },
    imageURL: { type: String, default: "" },
});

const Game = mongoose.model('Game', GameSchema);
export default Game;
