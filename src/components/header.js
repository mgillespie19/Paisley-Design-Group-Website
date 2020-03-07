import React from 'react'
import Link from 'gatsby-link'
import './header.css'

// import logo from '../assets/logo-header.png'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <Link to="/"> home </Link>
    <Link to="/portfolio"> portfolio </Link>
    <Link to="/careers"> careers </Link>
  </div>
)

export default Header
