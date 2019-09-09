import React, { useContext } from 'react'
import NotesContext from '../context/notes-context'
import useMousePosition from '../hooks/useMousePosition'

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext)
  const position = useMousePosition()
  const removeNote = (title) => {
    dispatch({ type: "REMOVE_NOTE", title })
  }

  return (
    <div>
      <h5>{ note.title } <button onClick={() => removeNote(note.title)}>x</button></h5>
      <p>{note.body}</p>
      <p>{position.x},{position.y}</p>
    </div>
  )
}

export { Note as default }