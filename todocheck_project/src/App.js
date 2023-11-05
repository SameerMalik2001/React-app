import { useState } from 'react';
import './App.css';

function App() {
  let work = ['go to market', 'lunch time','play video game', 'Snacks time','paly cirket', 'take bath at evening','sleeping time',
              'moive time', 'dinner time']
  const [checkedbox, setCheckedBox] = useState([])
  const [removed, setRemoved] = useState([])

  const remove = (item) => {
    setRemoved(removed.concat([item]))
  }


  return (
    <div className="App">
      <h1>Simple Todo</h1>
      {
        work.map((item) => (
          <div>
            {!removed.includes(item) &&
              <input type="checkbox" value={item} onChange={(e) => {
                if (!checkedbox.includes(e.target.value)) {
                  setCheckedBox(checkedbox.concat([e.target.value]))
                } else {
                  const val = e.target.value.toString()
                  let checkedbox_temp = checkedbox
                  const idx = checkedbox_temp.indexOf(val)
                  const halfBeforeTheUnwantedElement = checkedbox_temp.slice(0, idx)
                  const halfAfterTheUnwantedElement = checkedbox_temp.slice(idx + 1);
                  checkedbox_temp = halfBeforeTheUnwantedElement.concat(halfAfterTheUnwantedElement)
                  setCheckedBox(checkedbox_temp)
                }
              }} />
            }
            {
              !removed.includes(item) &&
              <span>{item}</span>
            }
            {
              !removed.includes(item) && checkedbox.includes(item) && <button onClick={() => remove(item)}>DELETE</button>
            }
            {
              !removed.includes(item) && <br />
            }
            
          </div>
        ))
      }
    </div>
  );
}

export default App;
