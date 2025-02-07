import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">⚡</span>
            <p>Improve your coding skills through fun and interactive games.</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Games</h4>
          <ul>
            <li><a href="#">Popular Games</a></li>
            <li><a href="#">New Releases</a></li>
            <li><a href="#">Challenges</a></li>
            <li><a href="#">Tournaments</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Leaderboard</a></li>
            <li><a href="#">Forums</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Discord</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Tech Game Library. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer