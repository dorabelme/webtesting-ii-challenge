import React, {useState, useEffect} from 'react';
import Dashboard from './Dashboard/Dashboard';
import Display from './Display/Display';


import './App.css';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);


  const ballIncrement = (event) => {
    setBalls(balls + 1)
  }

  const strikeIncrement = (event) => {
    setStrikes(strikes + 1)
  }

  const foulAction = (event) => {
    if (strikes === 0 || strikes === 1) {
      setStrikes(strikes + 1)
    } else {
      setStrikes(strikes)
    }
  }

  const hitButton = (event) => {
    setBalls(0)
    setStrikes(0)
  }

  useEffect(() => {
    if (balls > 4 || strikes > 3) {
      setBalls(0);
      setStrikes(0);
    }
    }, [balls, strikes]);
  

  return (
    <div>
      <Display ballCount={balls} strikeCount={strikes} />
      <Dashboard ballAction={ballIncrement} strikeAction={strikeIncrement} foulAction={foulAction} hitAction={hitButton} />
    
    </div>
  );
}

export default App;
