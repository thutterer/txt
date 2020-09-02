import React from "react"

class Note extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const textareaStyles = {
      width: '80ch',
      height: '60vh',
      resize: 'none'
    }
  
    return (
      <div>
        <textarea 
          style={textareaStyles} 
          value={this.props.value} 
          onChange={(event) => this.props.handleChange(this.props.id, event.target.value)} 
        />
        <br />
        <button onClick={() => this.props.deleteNote(this.props.id)}>Delete this</button>
      </div>
    )
  }
}

export default Note