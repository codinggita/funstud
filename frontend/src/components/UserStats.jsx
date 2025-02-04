import React from 'react'

function UserStats() {
  return (
    <div className="stats-card">
      <h3>Your Stats</h3>
      <div className="stats-grid">
        <div className="stat-item">
          <label>Games Played</label>
          <span>247</span>
        </div>
        <div className="stat-item">
          <label>Win Rate</label>
          <span>68%</span>
        </div>
        <div className="stat-item">
          <label>Current Streak</label>
          <span>7 days</span>
        </div>
        <div className="stat-item">
          <label>Global Rank</label>
          <span>#1,234</span>
        </div>
      </div>
    </div>
  )
}

export default UserStats