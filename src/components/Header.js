import { login, logout } from '../services/firebase';
import { Link } from 'react-router-dom'
import React from 'react'


function Header(props) {
    return (
        <nav classname="nav"
            style={{
                display: 'flex',
                alignItems: 'center',
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

            <div style={{ display: 'flex', alignItems: 'center' }}>
                {
                    props.user ?
                        <>
                        <div style={{ marginRight: 10}}>Welcome, {props.user.displayName}</div>
                        <img src={props.user.photoURL} alt={props.user.displayName} style={{
                            height: 40,
                            borderRadius: '50%',
                            marginRight:10
                        }} />
                            <div
                                onClick={logout}
                                style={{
                                    cursor: 'pointer',
                                    marginRight: 10
                                }}>
                                Logout
                            </div>
                        </>
                        :
                        <div
                            onClick={login}
                            style={{
                                cursor: 'pointer',
                                marginRight: 10
                            }}>
                            Login
                        </div>
                }
            </div>

        </nav>
    );

//   return (


//     <nav classname="nav">
//         <Link id="homepage" to="/">
//             <div>DTox</div>

//         </Link>
//         <Link to="/food">
//             <div>FOOD</div>
//         </Link>
//         <Link to="/clean">
//             <div>CLEANING PRODUCTS</div>
//         </Link>
//         <Link to="/other">
//             <div>OTHER PRODUCTS</div>
//         </Link>
//     </nav>
//   )

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