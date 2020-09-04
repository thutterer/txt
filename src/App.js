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
    this.addTask = this.addTask.bind(this)
    this.toggleTask = this.toggleTask.bind(this)
    this.changeTask = this.changeTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  addNote() {
    this.setState(prevState => {
      return {
        notes: prevState.notes.concat({id: Date.now(), value: '', tasks: []})
      }
    })
  }

  handleChange(id, newValue) {
    this.setState(prevState => {
      const updatedNotes = prevState.notes.map(note => {
        if (note.id === id) {
          note.value = newValue // FIXME: does this change prevState??
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

  addTask(id) {
    const newTaskId = Date.now()

    this.setState(prevState => {
      const updatedNotes = prevState.notes.map(prevNote => {
        if (prevNote.id === id) {
          // Deep clone of existing notes... not sure about this:
          // https://stackoverflow.com/a/122704/3449673
          // TODO: make sure I update state correctly everywhere!
          let updatedNote = JSON.parse(JSON.stringify(prevNote))
          const newTask = { id: newTaskId, checked: false, title: '' }
          !!updatedNote.tasks || (updatedNote.tasks = [])
          updatedNote.tasks.push(newTask)
          return updatedNote
        }
        else {return prevNote}
      })
      return {
        notes: updatedNotes
      }
    })

    // window.setTimeout(() => document.getElementById(`task-title-${newTaskId}`).focus(), 100)
  }

  toggleTask (noteId, taskId) {
    this.setState(prevState => {
      const updatedNotes = prevState.notes.map(prevNote => {
        if (prevNote.id === noteId) {
          let updatedNote = JSON.parse(JSON.stringify(prevNote))

          updatedNote.tasks = updatedNote.tasks.map(task => {
            if (task.id === taskId) {
              task.checked = (task.checked ? false : true)
            }
            return task
          })
          return updatedNote
        }
        else {return prevNote}
      })
      return {
        notes: updatedNotes
      }
    })
  }

  changeTask(noteId, taskId, newValue) {
    this.setState(prevState => {
      const updatedNotes = prevState.notes.map(prevNote => {
        if (prevNote.id === noteId) {
          let updatedNote = JSON.parse(JSON.stringify(prevNote))

          updatedNote.tasks = updatedNote.tasks.map(task => {
            if (task.id === taskId) {
              task.title = newValue
            }
            return task
          })
          return updatedNote
        }
        else {return prevNote}
      })
      return {
        notes: updatedNotes
      }
    })
  }

  deleteTask(noteId, taskId) {
    this.setState(prevState => {
      const updatedNotes = prevState.notes.map(prevNote => {
        if (prevNote.id === noteId) {
          let updatedNote = JSON.parse(JSON.stringify(prevNote))

          updatedNote.tasks = updatedNote.tasks.filter(task => {
            return (task.id !== taskId)
          })
          return updatedNote
        }
        else {return prevNote}
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
          {this.state.notes.map(note =>
            <Note
              key={note.id}
              id={note.id}
              value={note.value}
              tasks={note.tasks}
              handleChange={this.handleChange}
              deleteNote={this.deleteNote}
              addTask={this.addTask}
              toggleTask={this.toggleTask}
              changeTask={this.changeTask}
              deleteTask={this.deleteTask}
            />
          )}
        </main>
      </div>
    );
  }
}

export default App;
