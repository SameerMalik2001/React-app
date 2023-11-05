import { useState } from 'react';
import './App.css';

function App() {
  const data = [
    {
      Country: "india",
      Cities: ['Delhi', 'Mumbai', 'pilkhuwa', 'meerut', 'ghaziabad']
    },
    {
      Country: "pakistan",
      Cities: ['karachi', 'lahore']
    },
    {
      Country: "usa",
      Cities: ['florida', 'LA', 'los santos', 'taxes']
    }
  ]
  const [cities, setCities] = useState(data[0].Cities)
  return (
    <div className="App">
      <select className="FDD" onChange={(e) => {
        for(let i=0;i<data.length;i++) {
          if (data[i].Country === e.target.value) {
            setCities(data[i].Cities)
            return
          }
        }
      }}>
        {
          data.map((item) => (
            <option value={item.Country}>{item.Country}</option>
            ))
        }
      </select>
      <br /> <br />
      <select className="SDD">
        {
          cities.map((item) => (
            <option value={item}>{item}</option>
            ))
        }
      </select>
    </div>
  );
}

export default App;
