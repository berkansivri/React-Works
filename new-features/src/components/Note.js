import React, { useContext } from 'react'
import NotesContext from '../context/notes-context'

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext)
  
  const removeNote = (title) => {
    dispatch({ type: "REMOVE_NOTE", title })
  }
  
  return (
    <div>
      <h5>{ note.title } <button onClick={() => removeNote(note.title)}>x</button></h5>
      <p>{note.body}</p>
    </div>
  )
}

export { Note as default }