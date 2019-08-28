// Highter Order Component (HOC) - A component (HOC) that render another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share.</p> }
      <WrappedComponent {...props}/>
    </div>
  )
}

const requiredAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuth ? <WrappedComponent {...props}/> : <p>No auth</p>}
      
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requiredAuthentication(AdminInfo)

ReactDOM.render(<AuthInfo isAuth={true} isAdmin={true} info="There are the details" />, document.getElementById('app'));
// props from requireAuthentication HOC to withAdminWarning HOC to Info component.