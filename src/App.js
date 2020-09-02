import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer.js'
import Note from './components/Note.js'
import TmpData from './TmpData' // TODO: replace with localStorage

function App() {
  const notesComponents = TmpData.map(note => <Note key={note.id} value={note.value} />)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      {notesComponents}
      
      <Footer />
    </div>
  );
}

export default App;
