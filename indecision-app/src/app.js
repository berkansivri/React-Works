class IndecisionApp extends React.Component {
  render() {
    const title= "Indecision"
    const subTitle= "Put your life in the hands of a computer"
    const options = ['Thing one', 'Thing two', 'Thing four']

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
  handlePick() {
    
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
  handleAddOption(e) { 
    e.preventDefault()

    const option = e.target.elements.option.value.trim()
    if(option) {
      console.log(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))