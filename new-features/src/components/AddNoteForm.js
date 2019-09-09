import React, { useState, useContext } from 'react'
import NotesContext from '../context/notes-context'
import useMousePosition from '../hooks/useMousePosition'

const AddNoteForm = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const { dispatch } = useContext(NotesContext)
  const position = useMousePosition()

  const addNote = (e) => {
    e.preventDefault()
    dispatch({ type: "ADD_NOTE", note: { title, body } })
    setTitle("")
    setBody("")
  }

  return (
    //fragments
    <>
      <h3>Add Note {position.x},{position.y}</h3>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea value={body} onChange={(e) => setBody(e.target.value)}/>
        <button>Save</button>
      </form>
    </>
  )
}

export { AddNoteForm as default }