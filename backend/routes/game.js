import express from 'express';
import Game from '../models/Game.js';

const router = express.Router();

// Get all games with optional filters
router.get('/', async (req, res) => {
    try {
        const { category, difficulty } = req.query;
        const query = {};

        if (category) query.category = category;
        if (difficulty) query.difficulty = difficulty;

        const games = await Game.find(query);
        res.json(games);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch games' });
    }
});

// Get popular games
router.get('/popular', async (req, res) => {
    try {
        const popularGames = await Game.find({ isPopular: true }).sort({ playerCount: -1 }).limit(4);
        res.json(popularGames);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch popular games' });
    }
});

// Create a new game
router.post('/', async (req, res) => {
    try {
        const newGame = new Game(req.body);
        const savedGame = await newGame.save();
        res.status(201).json(savedGame);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create game' });
    }
});

// Update a game by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedGame);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update game' });
    }
});

// Delete a game by ID
router.delete('/:id', async (req, res) => {
    try {
        await Game.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete game' });
    }
});

export { router as gamesRouter };
