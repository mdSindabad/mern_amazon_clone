import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../logo.svg';
import {FaCartPlus} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';
import { signOutUser } from '../redux/actions/userActions';


function Navbar() {
    const {user, isLoggedIn} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    console.log(isLoggedIn)

    const handleSignOut = () => {
        dispatch(signOutUser());
        sessionStorage.removeItem('data');
    };

    return (
        <div className="nav-menu">
            <div className='container'>
                <ul classNem='row mb-0'>
                    <NavLink to='/' className='col-2 logo'>
                        <li>
                            <img src={logo} />
                        </li>
                    </NavLink>
                    <div className='d-flex w-100 justify-content-end align-items-center'>
                        <li className='nav-title'>{user.name}</li>
                        {
                            isLoggedIn ?
                            (<NavLink to='/'className=' col-2'>
                                <li onClick={handleSignOut}>Sign-out</li>
                            </NavLink>) :
                            (<NavLink to='/signin'className=' col-2'>
                                <li>Sign-in</li>
                            </NavLink>)
                        }
                        <NavLink to='/cart' className='col-2'>
                            <li className='cart'><FaCartPlus /></li>
                        </NavLink>
                    </div>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar
