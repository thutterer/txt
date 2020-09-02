import React from "react"

function Note(props) {
  const textareaStyles = {
    width: '80ch',
    height: '60vh',
    resize: 'none'
  }

  return (
    <textarea style={textareaStyles} defaultValue={props.value}></textarea>
  )
}

export default Note