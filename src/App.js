import React from 'react';
import logo from './logo.png';
import './App.css';
import Pad from './components/Pad.js'


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://github.com/thutterer/txt/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </header>

      <main>
        <Pad />
      </main>
    </div>
  )
}
