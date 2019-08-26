import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioItem = (props) => {
  return (
    <div>
      <p>
        This is Portfolio page with Id : {props.match.params.id}
      </p>
      <Link to="/portfolio/1"> Item 1 </Link>
      <Link to="/portfolio/2"> Item 2 </Link>
    </div>
  )
}

export default PortfolioItem