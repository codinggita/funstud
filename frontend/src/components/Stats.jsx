import React from 'react'

function Stats({ stats }) {
  return (
    <div className="stats-section">
      <h2>Your Stats</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Games Played</h3>
          <p className="stat-value">{stats.gamesPlayed}</p>
        </div>
        <div className="stat-card">
          <h3>Win Rate</h3>
          <p className="stat-value">{stats.winRate}%</p>
        </div>
        <div className="stat-card">
          <h3>Current Streak</h3>
          <p className="stat-value">{stats.streak} days</p>
        </div>
        <div className="stat-card">
          <h3>Global Rank</h3>
          <p className="stat-value">#{stats.rank}</p>
        </div>
      </div>
    </div>
  )
}

export default Stats