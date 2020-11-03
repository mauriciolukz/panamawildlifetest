import logo from './logo.svg';
import './App.css';
import FirstView from './components/FirstView';
import SecondView from './components/SecondView';

function App() {
  return (
   /*  <div className="App">
      <header className="App-header">
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
      </header> */
      <div>
        <FirstView/>
        <SecondView/>
      </div>  
    // </div>
  );
}

export default App;
