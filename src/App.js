import { useSignals } from '@preact/signals-react/runtime';

import logo from './logo.svg';
import Main from './Main'
import Side from './Side';
import './App.css';

function App() {
  useSignals();

  return (
    <div className="App">
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
      </header>
      <body>
        <Main />
        <Side />
      </body>
    </div>
  );
}

export default App;
