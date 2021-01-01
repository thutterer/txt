import React, { useEffect, useReducer } from 'react';
import './Pad.css'
import Note from './Note.js'


function loadFromLocalStorage() {
  return JSON.parse(localStorage.getItem('react-notes')) || { notes: [] }
}

function reducer(state, action) {
  switch (action.type) {
    case 'addNote':
      return {
        notes: [...state.notes, {
          id: Date.now(),
          value: '',
          color: 'transparent',
          tasks: []
        }]
      }

    case 'changeNote':
      return {
        notes: state.notes.map(note => {
          if (note.id === action.payload.id) {
            note.value = action.payload.value
          }
          return note
        })
      }

    case 'deleteNote':
      return {
        notes: state.notes.filter(note => { return note.id !== action.payload.id })
      }

    case 'addTaskToNote':
      return {
        notes: state.notes.map(note => {
          if (note.id === action.payload.id) {
            const newTaskId = Date.now()
            const newTask = { id: newTaskId, checked: false, title: '' }
            return { ...note, tasks: [...note.tasks, newTask]}
          }
          else {return note}
        })
      }

    case 'toggleTask':
      return {
        notes: state.notes.map(prevNote => {
          if (prevNote.id === action.payload.id) {
            // Deep clone of existing notes... not sure about this:
            // https://stackoverflow.com/a/122704/3449673
            // TODO: make sure I update state correctly everywhere!
            let updatedNote = JSON.parse(JSON.stringify(prevNote))

            updatedNote.tasks = updatedNote.tasks.map(task => {
              if (task.id === action.payload.taskId) {
                task.checked = (task.checked ? false : true)
              }
              return task
            })
            return updatedNote
          }
          else {return prevNote}
        })
      }

    case 'changeTask':
      return {
        notes: state.notes.map(prevNote => {
          if (prevNote.id === action.payload.id) {
            let updatedNote = JSON.parse(JSON.stringify(prevNote))

            updatedNote.tasks = updatedNote.tasks.map(task => {
              if (task.id === action.payload.taskId) {
                task.title = action.payload.value
              }
              return task
            })
            return updatedNote
          }
          else {return prevNote}
        })
      }

    case 'deleteTask':
      return {
        notes: state.notes.map(prevNote => {
          if (prevNote.id === action.payload.id) {
            let updatedNote = JSON.parse(JSON.stringify(prevNote))

            updatedNote.tasks = updatedNote.tasks.filter(task => {
              return (task.id !== action.payload.taskId)
            })
            return updatedNote
          }
          else {return prevNote}
        })
      }

    case 'colorize':
      return {
        notes: state.notes.map(note => {
          if (note.id === action.payload.id) {
            note.color = action.payload.color // FIXME: does this change prevState??
          }
          return note
        })
      }

    default:
      console.log('Unknown action type', action.type);
      return state
  }
}

export default function Pad() {
  const [state, dispatch] = useReducer(reducer, { notes: [] }, loadFromLocalStorage)

  function createAndEditNewNote() {
    dispatch({ type: 'addNote' })
    window.setTimeout(() => { // TODO: properly wait for next render
      document.querySelector('.note:last-of-type textarea').focus()
    }, 50)
  }
  
  useEffect( () => {
    localStorage.setItem('react-notes', JSON.stringify(state))
  })

  return (
    <>
      {state.notes.map(note =>
        <Note
          key={note.id}
          {...note}
          dispatch={dispatch}
        />
      )}
      <button autoFocus className="addBtn" onClick={() => createAndEditNewNote()}>
        +
      </button>
    </>
  )
}
