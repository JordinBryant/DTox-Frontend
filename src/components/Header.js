import { login, logout } from '../services/firebase';
import { Link } from 'react-router-dom'
import React from 'react'
const Header = () => {

    return (
        <nav classname="nav"
            style={{
                display:'flex',
                alignItems:'center',
                justifyContent: 'space-between'
            }}
            >
            <Link to="/">
                <div className='dtox'>DTox</div>
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
           
            <div style={{ display:'flex'}}>
                <div
                    onClick={login}
                    style={{
                        cursor: 'pointer',
                        marginRight: 10
                    }}>
                    Login
                </div>
                <div
                    onClick={logout}
                    style={{
                        cursor: 'pointer',
                        marginRight: 10
                    }}>
                    logout
                </div>
            </div>
        </nav>
    );
  return (

    <nav classname="nav">
        <Link id="homepage" to="/">
            <div>DTox</div>

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





export default Header