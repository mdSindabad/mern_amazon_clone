import React, {useState} from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { registerUser } from '../redux/actions/userActions';

function Registration() {
    const [user, setUser] = useState({name: '', email: '', password: '', password2: ''});
    const dispatch = useDispatch();

    // form handling functions
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.password !== '' && user.password === user.password2) {
            const regUser = {
                name: user.name,
                email: user.email,
                password: user.password
            };
            dispatch(registerUser(regUser));
        }
    };

    return (
        <div className='container my-4'>
            <div className='col-md-4 offset-md-4'>
                <div className='title-logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='res-form w-100 registration'>
                    <h4>Create account</h4>
                    <form onSubmit={handleSubmit} className='form-group'>
                        <label htmlFor='name'>Your name</label>
                        <input name='name' value={user.name} onChange={handleChange} className='form-control' type='text' />
                        <label htmlFor='email'>Email</label>
                        <input name='email' value={user.email} onChange={handleChange} className='form-control' type='email' />
                        <label htmlFor='password'>Password</label>
                        <input name='password' value={user.password} onChange={handleChange} className='form-control' type='password' />
                        <label htmlFor='password2'>Re-enter password</label>
                        <input name='password2' value={user.password2} onChange={handleChange} className='form-control' type='password' />
                        <button type='submit' className='btn btn-block res-btn mt-3'>Create yout account</button>
                    </form>
                    <p>
                        <span>Already have an account? </span>
                        <Link to='signin'>Sign-in</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Registration
