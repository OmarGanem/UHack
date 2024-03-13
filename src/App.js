import logo from './logo.svg';
import './App.css';
//import VehicleHistory from './VehicleHistory';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          {/* Components shown after login, e.g., VehicleHistory */}
        </div>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
      <header className="App-header">
      {/* <VehicleHistory /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
