import React from 'react'

function DailyChallenges() {
  const challenges = [
    {
      title: 'JavaScript Array Methods',
      description: 'Complete 5 array manipulation challenges',
      icon: '⌨️'
    },
    {
      title: 'Debug Challenge',
      description: 'Find and fix 3 bugs in React components',
      icon: '🐛'
    }
  ]

  return (
    <div className="challenges-card">
      <div className="card-header">
        <h3>Daily Challenges</h3>
        <a href="#" className="view-all">View All</a>
      </div>
      <div className="challenges-list">
        {challenges.map((challenge, index) => (
          <div key={index} className="challenge-item">
            <div className="challenge-info">
              <span className="challenge-icon">{challenge.icon}</span>
              <div>
                <h4>{challenge.title}</h4>
                <p>{challenge.description}</p>
              </div>
            </div>
            <button className="start-button">Start</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DailyChallenges