import React from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

function Registration() {
    return (
        <div className='container my-4'>
            <div className='col-md-4 offset-md-4'>
                <div className='title-logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='res-form w-100 registration'>
                    <h4>Create account</h4>
                    <form className='form-group'>
                        <label>Your name</label>
                        <input className='form-control' type='text' />
                        <label>Email</label>
                        <input className='form-control' type='email' />
                        <label>Password</label>
                        <input className='form-control' type='password' />
                        <label>Re-enter password</label>
                        <input className='form-control' type='password' />
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
