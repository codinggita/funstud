import React from 'react'
import GameCard from './GameCard'

function PopularGames() {
  const popularGames = [
    {
      title: "Higher or Lower",
      description: "Compare algorithm performance and complexity",
      difficulty: "Easy",
      players: 2345
    },
    {
      title: "Memory Match",
      description: "Match programming concepts and syntax",
      difficulty: "Medium",
      players: 1892
    },
    {
      title: "Speed Typing",
      description: "Test your coding speed and accuracy",
      difficulty: "Hard",
      players: 3567
    },
    {
      title: "Code Puzzle",
      description: "Arrange code blocks to solve problems",
      difficulty: "Medium",
      players: 1234
    }
  ]

  return (
    <section className="popular-games">
      <h2>Popular Games</h2>
      <div className="games-grid">
        {popularGames.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            description={game.description}
            difficulty={game.difficulty}
            players={game.players}
          />
        ))}
      </div>
    </section>
  )
}

export default PopularGames