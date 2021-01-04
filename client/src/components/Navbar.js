import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../logo.svg';
import {FaCartPlus} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';
import { signOutUser } from '../redux/actions/userActions';


function Navbar() {
    // redux store
    const {user, isLoggedIn} = useSelector(state => state.userReducer);
    const cartItems = useSelector(state => state.cartReducer.products);
    const dispatch = useDispatch();

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
                        <NavLink to='/AddProducts' className=' col-3'>
                         <li className='nav-title'>{user.name}</li>
                        </NavLink>
                        {
                            isLoggedIn ?
                            (<NavLink to='/'className=' col-4'>
                                <li onClick={handleSignOut}>Sign-out</li>
                            </NavLink>) :
                            (<NavLink to='/signin'className=' col-4'>
                                <li>Sign-in</li>
                            </NavLink>)
                        }
                        <NavLink to='/cart' className='col-2'>
                            <li className='cart'><FaCartPlus /></li>
                            {
                                cartItems.length > 0 ? <div className='cart-badge'>{cartItems.length}</div> : null
                            }
                            
                        </NavLink>
                    </div>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar
