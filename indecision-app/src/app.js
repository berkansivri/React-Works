class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: []
    }
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    console.log(this.state.options[randomNum]); 
  }
  handleAddOption(option) {
    if(this.state.options.includes(option)){
      return 'This option already added'
    }
    this.setState((prevState) => {
      return {
        options: [...prevState.options, option], 
      }
    })
  }
  render() {
    const title= "Indecision"
    const subTitle= "Put your life in the hands of a computer"

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h4>{this.props.subTitle}</h4>
      </div>
    )
  }
}

class Action extends React.Component { 
  render() {
    return (
      <div>
        <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        { this.props.options.map((opt,i) => <Option key={i} option={opt}/>) }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <p>
        {this.props.option}
      </p>
    )
  }
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
      this.setState(() => {
        return {
          error
        }
      })
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

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))