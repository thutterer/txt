import React, { useState } from 'react';
import './Task.css';

export default function Task(props) {
  const [editMode, setEditMode] = useState(props.title.length === 0)

  function toggleEditMode() {
    setEditMode(!editMode)
    if(!editMode) {
      window.setTimeout(() => document.getElementById(`task-title-${props.id}`).focus(), 100)
    }
  }

  return (
    <div className='task'>
      <input
        type='checkbox'
        id={`checkbox-${props.id}`}
        checked={props.checked}
        onChange={props.toggleTask}
      />

      <label
        htmlFor={`checkbox-${props.id}`}
        style={{display: (editMode ? 'none' : 'inline-block')}}
      >
        {props.title}
      </label>

      <input
        type='text'
        id={`task-title-${props.id}`}
        value={props.title}
        onChange={(e) => props.changeTask(e.target.value)}
        onKeyUp={(e) => { if(e.keyCode === 13) setEditMode(false) }}
        onBlur={() => setEditMode(false)}
        placeholder='new task'
        style={{display: (editMode ? 'inline-block' : 'none')}}
      />

      { !props.checked && <button className='icon' onClick={toggleEditMode}>
        { editMode || <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>}
        { editMode && <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>}
      </button>}

      { props.checked && <button className='icon' title='Delete task' onClick={props.deleteTask}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
      </button>}
    </div>
  )
}
