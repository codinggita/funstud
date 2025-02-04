import React from 'react'

function Leaderboard() {
  const leaders = [
    { name: 'John Doe', points: 3450, avatar: '👨‍💻' },
    { name: 'Jane Smith', points: 2340, avatar: '👩‍💻' },
    { name: 'Mike Johnson', points: 2210, avatar: '👨‍💻' }
  ]

  return (
    <div className="leaderboard-card">
      <div className="card-header">
        <h3>Leaderboard 🏆 </h3>
      </div>
      <div className="leaders-list">
        {leaders.map((leader, index) => (
          <div key={index} className="leader-item">
            <span className="rank">{index + 1}</span>
            <span className="avatar">{leader.avatar}</span>
            <span className="name">{leader.name}</span>
            <span className="points">{leader.points}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leaderboard