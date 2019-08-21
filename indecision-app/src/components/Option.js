import React from 'react'

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

export default Option