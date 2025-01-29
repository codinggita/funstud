import mongoose from 'mongoose';

const UserStatsSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    gamesPlayed: { type: Number, default: 0 },
    winRate: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
    rank: { type: Number, default: 0 },
});

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    stats: UserStatsSchema,
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', UserSchema);
const UserStats = mongoose.model('UserStats', UserStatsSchema);

export { User, UserStats };
