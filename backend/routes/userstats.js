import express from 'express';
import mongoose from 'mongoose';
import { User, UserStats } from '../models/User.js';

const router = express.Router();

// Get user stats
router.get('/', async (req, res) => {
    try {
        const userId = '6794e7416ebeb660b11ab70a'; // Replace with actual user ID
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ error: 'Invalid user ID' });
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const stats = user.stats;
        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch stats', details: error.message });
    }
});

// Update user stats by user ID
router.put('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ error: 'Invalid user ID' });
        }

        const updatedUser = await User.findByIdAndUpdate(userId, { stats: req.body }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(updatedUser.stats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update stats', details: error.message });
    }
});

// Delete user by user ID
router.delete('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ error: 'Invalid user ID' });
        }
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
});

export { router as statsRouter };
