import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }) )
  }
  handleDeleteOption = (option) => {
    this.setState((prev) => ({ options: prev.options.filter(o => o !== option) }) )
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    this.setState(() => ({ 
      selectedOption: this.state.options[randomNum] 
    }))
  }
  handleAddOption = (option) => {
    if(this.state.options.includes(option))
      return 'This option already added'
    else
    this.setState((prevState) => ({ options: [...prevState.options, option] }))
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
        <OptionModal
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  }
} 