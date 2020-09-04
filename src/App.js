import React from 'react';
import logo from './logo.png';
import './App.css';
import Note from './components/Note.js'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      notes: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
    this.addNote = this.addNote.bind(this)
  }

  addNote() {
    this.setState(prevState => {
      return {
        notes: prevState.notes.concat({id: Date.now(), value: ''})
      }
    })
  }

  handleChange(id, newValue) {
    this.setState(prevState => {
      const updatedNotes = prevState.notes.map(note => {
        if (note.id === id) {
          note.value = newValue
        }
        return note
      })
      return {
        notes: updatedNotes
      }
    })
  }

  deleteNote(id) {
    this.setState(prevState => {
      const updatedNotes = prevState.notes.filter(note => {
        return note.id !== id
      })
      return {
        notes: updatedNotes
      }
    })
  }

  componentDidMount() {
    const restoredNotes = JSON.parse(localStorage.getItem('react-notes'))
    this.setState(restoredNotes ? restoredNotes : {notes: [{id: 1, value: ''}]})
  }

  componentDidUpdate() {
    localStorage.setItem('react-notes', JSON.stringify(this.state))
  }

  render() {
    const notesComponents = this.state.notes.map(note => <Note key={note.id} id={note.id} value={note.value} handleChange={this.handleChange} deleteNote={this.deleteNote} />)

    return (
      <div className="App">
        <header className="App-header">
          <a href="https://github.com/thutterer/txt/">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <button className="addBtn" onClick={this.addNote}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </button>
        </header>

        <main>
          {notesComponents}
        </main>
      </div>
    );
  }
}

export default App;
