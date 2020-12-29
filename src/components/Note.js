import React from "react"
import './Note.css';
import Task from './Task.js'

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.textarea = React.createRef();
    this.colorInput = React.createRef();
  }

  goFullscreen(element) {
    if (!document.fullscreenElement) {
      this.textarea.current.parentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  createAndEditNewTask() {
    this.props.dispatch({ type: 'addTaskToNote', payload: { id: this.props.id } })
    window.setTimeout(() => { // TODO: properly wait for next render
      const newTaskId = this.props.tasks[this.props.tasks.length - 1].id
      document.querySelector(`#task-${newTaskId} input[type=text]`).focus()
    }, 50)
  }

  render() {
    return (
      <div className="note" style={{ borderBottom: `4px solid ${this.props.color || 'transparent'}` }}>
        <input
          ref={this.colorInput}
          type='color'
          onChange={ (e) => this.props.dispatch({ type: 'colorize', payload: { id: this.props.id, color: e.target.value } }) }
          style={{ display: 'none' }}
        />

        <textarea
          ref={this.textarea}
          value={this.props.value}
          onChange={ (event) => this.props.dispatch({ type: 'changeNote', payload: { id: this.props.id, value: event.target.value } }) }
        />

        <ul>
          {this.props.tasks && this.props.tasks.map(task =>
            <li key={task.id}>
              <Task
                id={task.id}
                checked={task.checked}
                title={task.title}
                toggleTask={ () => this.props.dispatch({ type: 'toggleTask', payload: { id: this.props.id, taskId: task.id } }) }
                changeTask={ newValue => this.props.dispatch({ type: 'changeTask', payload: { id: this.props.id, taskId: task.id, value: newValue} }) }
                deleteTask={ () => this.props.dispatch({ type: 'deleteTask', payload: { id: this.props.id, taskId: task.id } }) }
              />
            </li>
          )}
        </ul>

        <footer>
          <button
            className="icon"
            title="Colorize"
            onClick={() => this.colorInput.current.click()}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"/></svg>
          </button>

          <button
            className="icon"
            title="Fullscreen"
            onClick={(event) => this.goFullscreen(event.element)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
          </button>

          <button
            className="icon"
            title="Add a task"
            onClick={ () => this.createAndEditNewTask() }>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"/></svg>
          </button>

          {(this.props.value.length === 0 && (!this.props.tasks || this.props.tasks.length === 0)) &&
            <button
              title='Delete permanently'
              className="icon"
              onClick={ () => this.props.dispatch({ type: 'deleteNote', payload: { id: this.props.id } }) }>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </button>}
        </footer>
      </div>
    )
  }
}

export default Note
