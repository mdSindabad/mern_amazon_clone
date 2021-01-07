import React from 'react';
import logo from '../logo.svg';
import {useDispatch, useSelector} from 'react-redux';
import {signInUser} from '../redux/actions/userActions';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import ProcessWizard from './ProcessWizard';


function SignIn(props) {
    // formic
    const initialValues = {
        email: '',
        password: ''
    };

    // yup validation
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required')
    })

    // redux dispatch
    const dispatch = useDispatch();

    // // form handling functions
    const handleSubmit = (value) => {
        dispatch(signInUser(value))
        const forwardingLink = props.location.search.split('=')[1];
        if(forwardingLink === undefined) {
            props.history.push('/')
        } else {
            props.history.push('/shipping')
        }
    }

    const topHeader = () => {
        const forwardingLink = props.location.search.split('=')[0].split('?')[1];
        console.log(forwardingLink)
        if(forwardingLink === 'redirect') {
            return(<ProcessWizard step1 />)
        } else {
            return (
            <div className='title-logo'>
                <img src={logo} alt='logo' />
            </div>)
        }
    };

    // route to registration page
    const handleClick = () => {
        const forwardingLink = props.location.search.split('=')[0].split('?')[1];
        if(forwardingLink === 'redirect') {
            props.history.push('/registration?redirect=shipping')
        } else {
            props.history.push('/registration')
        }
    };

    return (
        <div className='container my-4'>
                {topHeader()}
            <div className='col-md-4 offset-md-4'>
                <h4>Sign-In</h4>
                <Formik className='res-form w-100 sign-in'
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {(value) => (
                        <Form>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <Field className='form-control' id='email' name='email' type='email' />
                                <ErrorMessage name='email' render={msg => <div className='input-error'>{msg}</div>} />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <Field className='form-control' id='password' name='password' type='password' />
                                <ErrorMessage render={msg => <div className='input-error'>{msg}</div>} name='password' />
                            </div>
                            <button className='btn btn-block res-btn mt-3' type='submit'>Create yout account</button>
                        </Form>
                    )}
                </Formik>
                    <p className='sign-in-mini-title text-secondary'>New to Amazon?</p>
                    <div className='d-flex justify-content-center'>
                        <button onClick={handleClick} className='create-acc-btn btn btn-block'>Create Your Amazon account</button>
                    </div>
            </div>
        </div>
    )
}

export default SignIn
