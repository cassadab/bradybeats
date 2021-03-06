import React, {Component} from 'react';
import './App.css';
import Home from "./components/Home";
import BeatStore from "./components/BeatStore";
import NavBar from "./components/NavBar";
import Licensing from './components/Licensing';

class App extends Component {
    render() {
        return (
            /*<div className="App">
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
            </div>*/
            <div>
                <NavBar/>
                <Home/>
                <BeatStore/>
                <Licensing/>
            </div>

        );
    }
}

export default App;
