import React from "react"
import './Note.css';

class Note extends React.Component {
  componentDidMount() {
    document.getElementById(`note-${this.props.id}`).focus()
  }

  goFullscreen(element) {
    if (!document.fullscreenElement) {
      document.getElementById(`note-${this.props.id}`).parentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  render() {
    const deleteBtnStyles = {
      position: 'absolute',
      bottom: '1em', right: '1em',
      zIndex: 100
    }

    return (
      <div className="note">
        <textarea
          id={`note-${this.props.id}`}
          value={this.props.value}
          onChange={(event) => this.props.handleChange(this.props.id, event.target.value)}
        />
        <footer>
          <button className="icon" title="Fullscreen" onClick={(event) => this.goFullscreen(event.element)}>
            <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
              <path d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"></path>
              <path d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"></path>
              <path d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"></path>
              <path d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"></path>
            </svg>
          </button>
        </footer>
        {this.props.value.length === 0 && <button style={deleteBtnStyles} onClick={() => this.props.deleteNote(this.props.id)}>-</button>}
      </div>
    )
  }
}

export default Note
