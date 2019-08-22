import React from 'react'

const Option = (props) => (
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

export default Option