

let count = 0
const addOne = () => { 
  count++
  renderCounterApp()
}
const subOne = () => { 
  count-- 
  renderCounterApp()
}
const reset = () => {
  count = 0
  renderCounterApp()
} 


const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>&nbsp;
      <button onClick={reset}>reset</button>&nbsp;
      <button onClick={subOne}>-1</button>
    </div>
  );

  ReactDOM.render(templateTwo,root);
}

renderCounterApp()