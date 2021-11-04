import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Card from './components/Card'

function App() {
  
  const [title, setTitle] = useState('Apple Card')

  // counter initialization
  const [count, setCount] = useState(0)
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
        <hr/>
        <button onClick={() => setCount(count + 1)}>Increase Counter</button>
        <hr/>
        <button onClick={() => setCount(count - 1)}>Decrease Counter</button>

        <h2>{count}</h2>
      </header>

      
    </div>
  );
}

export default App;
