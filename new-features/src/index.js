import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const notesReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_NOTES":
      return action.notes
    case "ADD_NOTE":
      console.log(action);
      return [...state, action.note]
    case "REMOVE_NOTE":
      return state.filter(x=> x.title !== action.title)
    default:
      return state
  }
}

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, [])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"))
    if(notes){
      dispatch({ type: "POPULATE_NOTES", notes })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])
  
  const addNote = (e) => {
    e.preventDefault()
    dispatch({ type: "ADD_NOTE", note: { title, body } })
    setTitle("")
    setBody("")
  }
  const removeNote = (title) => {
    dispatch({ type: "REMOVE_NOTE", title })
  }
  return (
    <div>
      <h1>Notes</h1>
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea value={body} onChange={(e) => setBody(e.target.value)}/>
        <button>Save</button>
      </form>
      <div>
        {notes.map((note,idx) => (
          <Note key={idx} note={note} removeNote={removeNote} />
        ))}
      </div>
    </div>
  )
}

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log("setting up effect!");
    return () => {
      console.log("clean up effect!");
    }
  }, [])
  return (
    <div>
      <h5>{ note.title } <button onClick={() => removeNote(note.title)}>x</button></h5>
      <p>{note.body}</p>
    </div>
  )
}

const App = (props) => {
  const [count, setCount] = useState(props.count || 0)
  const [text, setText] = useState('')

  useEffect(() => {
    console.log("run once");
  }, [])

  useEffect(() => {
    console.log("effect run");
    document.title = count
  }, [count])

  return (
    <div>
      <p>The current {text || 'count'} is {count}</p>
      <button onClick={() => setCount(count+1)}>+1</button>
      <button onClick={() => setCount(props.count || 0)}>reset</button>
      <button onClick={() => setCount(count-1)}>-1</button>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}


ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
