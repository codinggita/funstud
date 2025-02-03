import express from 'express';
import { UserStats } from '../models/User.js';

const router = express.Router();

// Get user stats
router.get('/', async (req, res) => {
    try {
        // In a real app, get userId from auth middleware
        const userId = '6794e7416ebeb660b11ab70a';
        const stats = await UserStats.findOne({ userId });

        if (!stats) {
            return res.status(404).json({ error: 'Stats not found' });
        }

        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch stats' });
    }
});

// Create new user stats
router.post('/', async (req, res) => {
    try {
        const newStats = new UserStats(req.body);
        const savedStats = await newStats.save();
        res.status(201).json(savedStats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create stats' });
    }
});

// Update user stats by user ID
router.put('/:userId', async (req, res) => {
    try {
        const updatedStats = await UserStats.findOneAndUpdate({ userId: req.params.userId }, req.body, { new: true });
        if (!updatedStats) {
            return res.status(404).json({ error: 'Stats not found' });
        }
        res.json(updatedStats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update stats' });
    }
});

// Delete user stats by user ID
router.delete('/:userId', async (req, res) => {
    try {
        await UserStats.findOneAndDelete({ userId: req.params.userId });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete stats' });
    }
});

export { router as statsRouter };
