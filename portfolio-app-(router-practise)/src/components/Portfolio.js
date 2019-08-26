import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => (
  <div>
    <p>
      This is portfolio page
    </p>
    <Link to="portfolio/1"> Item 1 </Link>
    <Link to="portfolio/1"> Item 2 </Link>
  </div>
)

export default Portfolio