import React from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { registerUser } from '../redux/actions/userActions';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import ProcessWizard from './ProcessWizard';


function Registration(props) {
    
    const dispatch = useDispatch();
    
    // formik
    const initialValues = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    };

    // yup validation
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
        passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    const topHeader = () => {
        const forwardingLink = props.location.search.split('=')[0].split('?')[1];
        if(forwardingLink === 'redirect') {
            return(<ProcessWizard step1 />)
        } else {
            return (
            <div className='title-logo'>
                <img src={logo} alt='logo' />
            </div>)
        }
    };

    const bottomLink = () => {
        const forwardingLink = props.location.search.split('=')[0].split('?')[1];
        if(forwardingLink === 'redirect') {
            return null
        } else {
            return (
                <p className='mt-3'>
                    <span>Already have an account? </span>
                    <Link to='signin'>Sign-in</Link>
                </p>)
        }
    }


    const handleSubmit = (value) => {
        const regUser = {
            name: value.name,
            email: value.email,
            password: value.password
        };
        dispatch(registerUser(regUser));
        const forwardingLink = props.location.search.split('=')[1];
        if(forwardingLink === undefined) {
            props.history.push('/')
        } else {
            props.history.push('/shipping')
        }
    };

    return (
        <div className='container my-4'>
            {topHeader()}
            <div className='col-md-4 offset-md-4'>
                <h4>Create account</h4>
                <Formik className='res-form w-100 registration'
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {(value) => (
                         <Form>
                            <div className='form-group'>
                                <label htmlFor='name'>Your name</label>
                                <Field className='form-control' name='name' id='name' type='text' />
                                <ErrorMessage name='name' render={msg => <div className='input-error'>{msg}</div>} />
                            </div>
    
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <Field className='form-control' name='email' id='email' type='email' />
                                <ErrorMessage name='email' render={msg => <div className='input-error'>{msg}</div>} />
                            </div>
    
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <Field className='form-control' name='password' id='password' type='password' />
                                <ErrorMessage name='password' render={msg => <div className='input-error'>{msg}</div>} />
                            </div>
    
                            <div className='form-group'>
                                <label htmlFor='passwordConfirm'>Re-enter password</label>
                                <Field className='form-control' name='passwordConfirm' id='passwordConfirm' type='password' />
                                <ErrorMessage name='passwordConfirm' render={msg => <div className='input-error'>{msg}</div>} />
                            </div>
                            <button className='btn btn-block res-btn mt-3' type='submit'>Create yout account</button>
                            {bottomLink()}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Registration
