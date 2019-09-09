import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import NoteApp from './components/NoteApp'



// const App = (props) => {
//   const [count, setCount] = useState(props.count || 0)
//   const [text, setText] = useState('')

//   useEffect(() => {
//     console.log("run once");
//   }, [])

//   useEffect(() => {
//     console.log("effect run");
//     document.title = count
//   }, [count])

//   return (
//     <div>
//       <p>The current {text || 'count'} is {count}</p>
//       <button onClick={() => setCount(count+1)}>+1</button>
//       <button onClick={() => setCount(props.count || 0)}>reset</button>
//       <button onClick={() => setCount(count-1)}>-1</button>
//       <input value={text} onChange={(e) => setText(e.target.value)}/>
//     </div>
//   )
// }


ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
