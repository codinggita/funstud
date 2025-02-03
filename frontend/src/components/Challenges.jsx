import React from 'react'

function Challenges({ challenges }) {
  return (
    <div className="challenges-section">
      <div className="section-header">
        <h2>Daily Challenges</h2>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="challenges-grid">
        {challenges.map((challenge, index) => (
          <div key={index} className="challenge-card">
            <div className="challenge-icon">{'</>'}</div>
            <div className="challenge-content">
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
              <button className="start-btn">Start</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Challenges