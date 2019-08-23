import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: ""
  }
  handleAddOption = (e) => { 
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
          <button className="button">Add Option</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    )
  }
}
