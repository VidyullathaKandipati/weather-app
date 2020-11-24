import { GetLocation } from '../';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
      <header className="App-header">
        Weather app
      </header>
      <GetLocation />
      </div>
    </div>
  );
}

export default App;
