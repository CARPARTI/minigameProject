import './App.css';
import MainBoard from './components/GameBoard.js';
import Timer from './components/Time.js';

function App() {
  return (
    <div className="App">
      <header>
        This is the App
      </header>
      <div>
        <MainBoard />
        <Timer />
      </div>
    </div>
  );
}

export default App;
