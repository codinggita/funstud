import React from 'react'

function GameCard({ title, description, difficulty, players, image }) {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'green';
      case 'medium': return 'orange';
      case 'hard': return 'red';
      default: return 'gray';
    }
  }

  // Default images for different types of games
  const getDefaultImage = (title) => {
    const images = {
      'Algorithm Race': 'https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/algorithm-race.png',
      'Data Structure Master': 'https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/data-structure.png',
      'CSS Grid Master': 'https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/css-grid.png',
      'SQL Challenge': 'https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/sql-challenge.png',
      'Higher or Lower': 'https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/higher-lower.png',
      'Memory Match': 'https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/memory-match.png',
      'Speed Typing': 'https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/speed-typing.png',
      'Code Puzzle': 'https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/code-puzzle.png'
    }
    return images[title] || 'https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/default-game.png'
  }

  return (
    <div className="game-card">
      <div className="game-image">
        <img src={image || getDefaultImage(title)} alt={title} />
      </div>
      <div className="game-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="game-meta">
          <span className={`difficulty ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
          <span className="players">
            👥 {players} players
          </span>
        </div>
      </div>
      <button className="play-button">Play</button>
    </div>
  )
}

export default GameCard