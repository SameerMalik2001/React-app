import './App.css';
import Navbar from './component/Navbar';
import Color from './component/Color';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Color/>
    </div>
  );
}

export default App;
