import express from 'express';
import { UserStats } from '../models/UserStats.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const leaderboard = await UserStats.find()
      .sort({ winRate: -1, gamesPlayed: -1 })
      .limit(3);
    
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

export { router as leaderboardRouter };