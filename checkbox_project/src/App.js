import { useState } from 'react';
import './App.css';

function App() {
  const games = ["cirket", 'Hockey', 'Football', 'Wrestling']
  const event = ['weekday', 'weekend']
  const [game, setGame] = useState('')
  const [evt, setEvt] = useState('')

  console.log(game, evt)

  return (
    <div className="App">
      <h1>Games name:</h1>
      {
        games.map((item)=>(
          <>
            <input type='radio' name='game' value={item} onChange={(e)=>setGame(e.target.value)}/>
            <label>{item}</label>
            <br />
          </>
        ))
      }
      <h1>Days:</h1>
      {
        event.map((item)=>(
          <>
            <input type='radio' name='day' value={item} onChange={(e)=>setEvt(e.target.value)}/>
            <label>{item}</label>
            <br />
          </>
        ))
      }
      {
        game && evt &&
        <p>{game} on {evt}</p>
      }
    </div>
  );
}

export default App;
