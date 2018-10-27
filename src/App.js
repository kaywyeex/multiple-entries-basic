import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  async componentDidMount() {
    const res = await fetch('/api')
      .then(x => x.text())
      .catch(e => e);

    console.log(res);
  }

  render() {
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
            rel="noopener noreferrer">
            INDEX.HTML
          </a>
        </header>
      </div>
    );
  }
}

export default App;
