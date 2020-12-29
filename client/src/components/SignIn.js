import React, { useState, useEffect} from 'react';
import logo from '../logo.svg';
import {useDispatch} from 'react-redux';
import {signInUser} from '../redux/actions/userActions';

function SignIn(props) {
    // local state
    const [user, setUser] = useState({email: '', password: ''});
    
    // redux dispatch
    const dispatch = useDispatch();

    // form handling functions
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.email && user.password) {
            dispatch(signInUser(user))
        }
    }

    // route to registration page
    const handleClick = () => {
        props.history.push('/registration');
    };

    return (
        <div className='container my-4'>
            <div className='col-md-4 offset-md-4'>
                <div className='title-logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='res-form w-100 sign-in'>
                    <h4>Sign-In</h4>
                    <form onSubmit={handleSubmit} className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input name='email' value={user.email} onChange={handleChange} className='form-control' type='email' />
                        <label htmlFor='password'>Password</label>
                        <input name='password' value={user.password} onChange={handleChange} className='form-control' type='password' />
                        <button type='submit' className='btn btn-block res-btn mt-3'>Create yout account</button>
                    </form>
                </div>
                    <p className='sign-in-mini-title text-secondary'>New to Amazon?</p>
                    <div className='d-flex justify-content-center'>
                        <button onClick={handleClick} className='create-acc-btn btn btn-block'>Create Your Amazon account</button>
                    </div>
            </div>
        </div>
    )
}

export default SignIn
