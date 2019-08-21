class Visibility extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      show: false
    }
  }
  handleToggle() {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <br/>
        <button onClick={this.handleToggle}>{this.state.show ? "Hide" : "Show"}</button>
        {this.state.show &&
          <div>
            <hr/>
            <h5>Here!</h5>
          </div>
        }
      </div>
    )
  }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'))
