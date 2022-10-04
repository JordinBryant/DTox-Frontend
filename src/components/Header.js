import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="nav">
        <Link to="/">
            <div>HOME</div>
        </Link>
        <Link to="/food">
            <div>FOOD</div>
        </Link>
        <Link to="/clean">
            <div>CLEANING PRODUCTS</div>
        </Link>
        <Link to="/other">
            <div>OTHER PRODUCTS</div>
        </Link>
    </nav>
  )
}

export default Header;