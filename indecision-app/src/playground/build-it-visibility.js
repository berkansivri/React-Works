let show = false

const btnToggle = () => {
  show = !show 
  render()
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <br/>
      <button onClick={btnToggle}>{show ? 'Hide' : "Show"}</button>
      {show && 
        <div><hr/>Here!</div>
      }
    </div>
  )
  ReactDOM.render(template, document.getElementById("app"))
}

render();