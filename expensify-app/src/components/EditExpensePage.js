import React from 'react'

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      This is edit expense component with id : {props.match.params.id}
    </div>
  )
}

export default EditExpensePage