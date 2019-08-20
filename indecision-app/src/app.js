//JSX - Javascript XML
const app = {
  title: "Indecision App",
  subtitle: "This is some info",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value
  if(option) {
    app.options.push(option)
    e.target.elements.option.value = ""
    renderApp()
  }
};

const remoteAllOptions = () => {
  app.options = []
  renderApp()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  console.log(option);
}

const root = document.getElementById('app')

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1> 
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options: " + app.options.length : "No options"}</p>
      <button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={remoteAllOptions}>Remove All</button>
      <ol>
        {
          app.options.map((opt,i) => { 
            return <li key={i}>{opt}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template, root);
}

renderApp()