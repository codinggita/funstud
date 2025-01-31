import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import { gamesRouter } from './routes/game.js';
import { statsRouter } from './routes/userstats.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/games', gamesRouter);
app.use('/stats', statsRouter);

const PORT = process.env.PORT || 5000;
mongoose.connect('mongodb+srv://Mahir:Mahir2005@cluster0.kdlpk.mongodb.net/funstud', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error.message));
