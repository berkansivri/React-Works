class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.addOne = this.addOne.bind(this)
    this.minusOne = this.minusOne.bind(this)
    this.reset = this.reset.bind(this)
    this.state = {
      count: 0,
      name: "Berkan"
    }
  }
  addOne() {
    this.setState((prevState) => {
      return {
        count: ++prevState.count
      }
    })
  }
  minusOne() {
    this.setState((prevState) => {
      return {
        count: --prevState.count
      }
    })
  }
  reset() {
    this.setState((prevState) => {
      return {
        count: 0
      }
    })
  }
  render() {
    return (
      <div>
        {this.state.name}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter/>, document.getElementById('app'))
