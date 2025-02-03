import React from 'react'

function Leaderboard() {
  const leaderboardData = [
    { rank: 1, username: 'John Doe', score: 3450 },
    { rank: 2, username: 'Jane Smith', score: 3340 },
    { rank: 3, username: 'Mike Johnson', score: 3210 }
  ]

  return (
    <div className="leaderboard-section">
      <div className="section-header">
        <h2>Leaderboard</h2>
        <div className="trophy-icon">🏆</div>
      </div>
      <div className="leaderboard-list">
        {leaderboardData.map((player) => (
          <div key={player.rank} className="leaderboard-item">
            <span className="rank">{player.rank}</span>
            <span className="user-avatar">👤</span>
            <span className="username">{player.username}</span>
            <span className="score">{player.score.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leaderboard