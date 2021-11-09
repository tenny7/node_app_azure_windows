// import logo from './logo.svg';
import './App.css';
// import {useState} from 'react'
// import Card from './components/Card'
import Kpi from './components/Kpi'
import Dashboard from './components/Dashboard'
import './components/css/style.css'
import Leaderboard from './components/Leaderboard'
import Header from './components/Header'


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Header />
        <hgroup>
          <h2>MTC</h2>
          <p className="card-subheading">Metrics That Count</p>
        </hgroup>
        
        <div className="flx-center">
          <Leaderboard/>
          <Dashboard />
          <Kpi />
        </div>
      </header>  
    </div>
  );
}

export default App;
