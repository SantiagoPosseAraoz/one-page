import './App.css';
import FirstSquare from './comonents/FirstSquare.js';
import SecondSquare from './comonents/SecondSquare';
import FirstView from './comonents/FirstView';
import SecondView from './comonents/SecondView';

function App() {
  return (
    <div className="App">
      <FirstView/>
      <div>
        <FirstSquare/>
        <SecondSquare/>
        <FirstSquare/>
      </div>
      <SecondView/>
    </div>
  );
}

export default App;
