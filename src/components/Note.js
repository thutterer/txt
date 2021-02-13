import React, { useRef, useState } from "react"
import './Note.css';
import Task from './Task.js'

export default function Note(props) {
  const textarea = useRef();
  const colorInput = useRef();
  const [showChecked, setshowChecked] = useState(true)

  function goFullscreen(element) {
    if (!document.fullscreenElement) {
      textarea.current.parentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  function createAndEditNewTask() {
    props.dispatch({ type: 'addTaskToNote', payload: { id: props.id } })
    window.setTimeout(() => { // TODO: properly wait for next render
      const newTaskId = props.tasks[props.tasks.length - 1].id
      document.querySelector(`#task-${newTaskId} input[type=text]`).focus()
    }, 50)
  }

  function shareText() {
    if (navigator.share) {
      navigator.share({
        text: props.value,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  }

  function onTaskDragStart(event, task) {
    event.dataTransfer.setData("task", task);
    event.dataTransfer.effectAllowed = "move";
  }

  function onTaskDrop(event) {
    event.preventDefault();
    const taskData = JSON.parse(event.dataTransfer.getData('task'))
    event.target.style.backgroundColor = 'transparent';
    props.dispatch({ type: 'moveTask', payload: { id: props.id, task: taskData, before: event.target.dataset.index } })
  }

  function onTaskDragOver(event) {
    event.preventDefault();
    event.target.style.backgroundColor = 'var(--primary-color)';
  }

  function onTaskDragLeave(event) {
    event.target.style.backgroundColor = 'transparent';
  }

  return (
    <div className="note" style={{ borderBottom: `4px solid ${props.color || 'transparent'}` }}>
      <input
        ref={colorInput}
        type='color'
        onChange={ (e) => props.dispatch({ type: 'colorize', payload: { id: props.id, color: e.target.value } }) }
        style={{ display: 'none' }}
      />

      <textarea
        ref={textarea}
        value={props.value}
        onChange={ (event) => props.dispatch({ type: 'changeNote', payload: { id: props.id, value: event.target.value } }) }
      />

      <ul>
        {props.tasks && props.tasks.map((task, index) =>
          (!task.checked || showChecked) && <li key={task.id} draggable onDragStart={(e) => onTaskDragStart(e, JSON.stringify(task))}>
            <div className="dropzone" data-index={index} onDrop={onTaskDrop} onDragOver={onTaskDragOver} onDragLeave={onTaskDragLeave} />
            <Task
              id={task.id}
              checked={task.checked}
              title={task.title}
              date={task.date}
              toggleTask={ () => props.dispatch({ type: 'toggleTask', payload: { id: props.id, taskId: task.id } }) }
              changeTask={ newValue => props.dispatch({ type: 'changeTask', payload: { id: props.id, taskId: task.id, value: newValue} }) }
              deleteTask={ () => props.dispatch({ type: 'deleteTask', payload: { id: props.id, taskId: task.id } }) }
              changeDate={ newValue => props.dispatch({ type: 'changeDate', payload: { id: props.id, taskId: task.id, value: newValue} }) }
            />
          </li>
        )}
        <li><div className="dropzone" data-index={props.tasks.length + 1} onDrop={onTaskDrop} onDragOver={onTaskDragOver} onDragLeave={onTaskDragLeave} /></li>
      </ul>

      <footer>
        {showChecked ? <button
          className="icon"
          title="Hide done tasks"
          onClick={ () => setshowChecked(false) }>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>
        </button>
        :
        <button
          className="icon"
          title="Show done tasks"
          onClick={ () => setshowChecked(true) }>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
        </button>}

        <button
          className="icon"
          title="Add a task"
          onClick={ () => createAndEditNewTask() }>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"/></svg>
        </button>

        <button
          className="icon"
          title="Colorize"
          onClick={() => colorInput.current.click()}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"/></svg>
        </button>

        <button
          className="icon"
          title="Fullscreen"
          onClick={(event) => goFullscreen(event.element)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
        </button>

        {(props.value.length === 0 && (!props.tasks || props.tasks.length === 0)) ?
          <button
            title="Delete permanently"
            className="icon"
            onClick={ () => props.dispatch({ type: 'deleteNote', payload: { id: props.id } }) }>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>
          </button> :
          navigator.share && <button
          title="Share (text only)"
          className="icon"
          onClick={ () => shareText() }>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
        </button>
        }
      </footer>
    </div>
  )
}
