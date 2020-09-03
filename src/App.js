import React from 'react';
import logo from './logo.svg';
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
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <main>
          {notesComponents}
        </main>

        <br/>
        <button className="addBtn" onClick={this.addNote}>+</button>
      </div>
    );
  }
}

export default App;
