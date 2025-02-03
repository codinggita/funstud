import { useState, useEffect } from 'react'
// import { fetchStats, fetchChallenges } from './services/api'
import Header from './components/Header'
import Stats from './components/Stats'
import Challenges from './components/Challenges'
import Leaderboard from './components/Leaderboard'
import './App.css'

function App() {
  const [stats, setStats] = useState({
    gamesPlayed: 0,
    winRate: 0,
    streak: 0,
    rank: 0
  })

  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    loadStats();
    loadChallenges();
  }, [])

  const loadStats = async () => {
    const data = await fetchStats()
    setStats(data)
  }

  const loadChallenges = async () => {
    const data = await fetchChallenges();
    setChallenges(data);
  }

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Stats stats={stats} />
        <Challenges challenges={challenges} />
        <Leaderboard />
      </div>
    </div>
  )
}

export default App
