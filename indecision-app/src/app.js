class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options: []
    }
  }
  componentDidMount() {
    try {
      const options = localStorage.getItem('options')
      if(options){
        this.setState(() => ({ options: JSON.parse(options) }))
      }
    } catch (error) { }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      localStorage.setItem("options", JSON.stringify(this.state.options))
    }
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }) )
  }
  handleDeleteOption(option) {
    this.setState((prev) => ({ options: prev.options.filter(o => o !== option) }) )
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    console.log(this.state.options[randomNum]); 
  }
  handleAddOption(option) {
    if(this.state.options.includes(option)){
      return 'This option already added'
    }
    this.setState((prevState) => ({ options: [...prevState.options, option] }))
  }
  render() {
    const subTitle= "Put your life in the hands of a computer"

    return (
      <div>
        <Header subTitle={subTitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h4>{props.subTitle}</h4>} 
    </div>
  )
}

Header.defaultProps = {
  title: "Indecision"
}

const Action = (props) => {
  return (
    <div>
      <button 
        disabled={!props.hasOptions} 
        onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started.</p>}
      {
        props.options.map((opt,i) => ( 
          <Option key={i} option={opt} handleDeleteOption={props.handleDeleteOption}/>
        ))
      }
    </div>
  )
}

const Option = (props) => {
  return (
    <p>
      {props.option + '    '}
      <button 
        onClick={() => {
          props.handleDeleteOption(props.option)
        }
      }>
      Remove
      </button>
    </p>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: ""
    }
  }
  handleAddOption(e) { 
    e.preventDefault()

    const option = e.target.elements.option.value.trim()
    if(option) {
      e.target.elements.option.value = ""
      
      const error = this.props.handleAddOption(option)
      this.setState(() => ({ error }) )
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    )
  }
} 


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))