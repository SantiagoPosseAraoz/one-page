import './App.css';
import FirstSquare from './comonents/FirstSquare.js';
import SecondSquare from './comonents/SecondSquare';
import FirstView from './comonents/FirstView';
import SecondView from './comonents/SecondView';
import Navbar from './comonents/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SecondView/>
      <div>
        <FirstSquare/>
        <SecondSquare/>
        <FirstSquare/>
      </div>
      <FirstView/>
    </div>
  );
}

export default App;
