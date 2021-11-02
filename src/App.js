import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Card from './components/Card'

function App() {
  
  const [title, setTitle] = useState('Apple Card')
  const buttonClicked = () => {
    setTitle('Gift Card')
  }
   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <button onClick={buttonClicked}>
         I am button. Click Me  
        </button>  
        <hr/>
        <Card activeTab={title}/>  
      </header>
    </div>
  );
}

export default App;
