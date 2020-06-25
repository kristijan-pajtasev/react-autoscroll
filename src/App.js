import React from 'react';
import logo from './logo.svg';
import './App.css';
import AutoScroll from './components/AutoScroll/AutoScroll.compiled'

function App() {
    return (
        <div className="App">
            <AutoScroll>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
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
            </AutoScroll>
        </div>
    );
}

export default App;
