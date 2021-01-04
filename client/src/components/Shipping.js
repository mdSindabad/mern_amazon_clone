import React from 'react';
import {useDispatch} from 'react-redux';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import ProcessWizard from './ProcessWizard';
import { add_shipping_address } from '../redux/actions/shippingActions.js';

function Shipping(props) {
    
    const dispatch = useDispatch();
    
    // formik
    const initialValues = {
        address: '',
        city: '',
        postal_code: '',
        country: ''
    };

    // yup validation
    const validationSchema = Yup.object({
        address: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        postal_code: Yup.string().required('Required'),
        country: Yup.string().required('Required')
    })


    const handleSubmit = (value) => {
        dispatch(add_shipping_address(value));
        props.history.push('/payment')
    };

    return (
        <div className='container my-4 '>
            <ProcessWizard step1 step2 />
            <div className='col-md-4 offset-md-4 shipping'>
                <h4><b>Shipping</b></h4>
                <Formik className='res-form w-100 registration'
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {(value) => (
                         <Form>
                            <div className='form-group'>
                                <label htmlFor='address'>Address</label>
                                <Field className='form-control' name='address' id='address' type='text' />
                                <ErrorMessage name='address' render={msg => <div className='input-error'>{msg}</div>} />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='city'>City</label>
                                <Field className='form-control' name='city' id='city' type='text' />
                                <ErrorMessage name='city' render={msg => <div className='input-error'>{msg}</div>} />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='postal_code'>Postal Code</label>
                                <Field className='form-control' name='postal_code' id='postal_code' type='text' />
                                <ErrorMessage name='postal_code' render={msg => <div className='input-error'>{msg}</div>} />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='country'>Country</label>
                                <Field className='form-control' name='country' id='country' type='text' />
                                <ErrorMessage name='country' render={msg => <div className='input-error'>{msg}</div>} />
                            </div>
                            <button className='btn btn-block res-btn mt-3' type='submit'><b>Continue</b></button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Shipping
