import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import UserStats from './components/UserStats'
import DailyChallenges from './components/DailyChallenges'
import Leaderboard from './components/Leaderboard'
import GameCard from './components/GameCard'
import PopularGames from './components/PopularGames'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <header className="header">
        <h1>Code Battle Arena</h1>
        <p className="subtitle">Challenge other developers in real-time coding battles. Solve problems faster, write cleaner code, and climb the global rankings.</p>
        <button className="play-button">Play Now</button>
      </header>

      <div className="dashboard">
        <UserStats />
        <DailyChallenges />
        <Leaderboard />
      </div>

      <section className="games-section">
        <div className="games-header">
          <h2>All Games</h2>
          <div className="filters">
            <select className="filter-button">
              <option>All Categories</option>
            </select>
            <select className="filter-button">
              <option>All Difficulties</option>
            </select>
            <button className="filter-button">Sort by</button>
          </div>
        </div>

        <div className="games-grid">
          <GameCard 
            title="Algorithm Race"
            description="Race against time to solve algorithm challenges"
            difficulty="Easy"
            players={1234}
          />
          <GameCard 
            title="Data Structure Master"
            description="Master common data structures through puzzles"
            difficulty="Medium"
            players={2345}
          />
          <GameCard 
            title="CSS Grid Master"
            description="Perfect your CSS layout skills"
            difficulty="Hard"
            players={3456}
          />
          <GameCard 
            title="SQL Challenge"
            description="Optimize database queries and operations"
            difficulty="Medium"
            players={1789}
          />
        </div>

        <button className="load-more">Load More Games</button>
      </section>

      <PopularGames />
      <Footer />
    </div>
  )
}

export default App