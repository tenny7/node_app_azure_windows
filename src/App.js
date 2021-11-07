import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Card from './components/Card'
import Kpi from './components/Kpi'
import Dashboard from './components/Dashboard'
import './components/css/style.css'
import Leaderboard from './components/Leaderboard'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <hgroup>
          <h2>MTC</h2>
          <p className="card-subheading">Metrics That Count</p>
        </hgroup>
        
        <div className="flx-center">
          <Leaderboard/>
          <Dashboard />
          <Kpi />
        </div>
        <h4><span className="label-blue"> Designed and Developed by</span> : Tennyson Onovwiona </h4>
      </header>  
    </div>
  );
}

export default App;
