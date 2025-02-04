import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <span>Code Battle</span>
        </div>
        <div className="nav-links">
          <a href="#" className="active">Games</a>
          <a href="#">Leaderboard</a>
          <a href="#">Challenges</a>
          <a href="#">Community</a>
        </div>
      </div>
      <div className="nav-right">
        <div className="search-bar">
          <input type="text" placeholder="Search games..." />
          <button className="search-icon">🔍</button>
        </div>
        <button className="create-btn">+</button>
        <div className="user-profile">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" alt="Profile" className="avatar" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar