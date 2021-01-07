import React from 'react';
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

function Registration(props) {
    
    // formik
    const initialValues = {
        name: '',
        category: '',
        image: '',
        price: '',
        brand: '',
        rating: '',
        stock: ''
    };

    // yup validation
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        category: Yup.string().required('Required'),
        image: Yup.string().required('Required'),
        price: Yup.number().required('Required'),
        brand: Yup.string().required('Required'),
        rating: Yup.string().required('Required'),
        stock: Yup.string().required('Required'),
    })

    const handleSubmit = async (value) => {
        const data = await JSON.parse(sessionStorage.getItem('data'));
        const token = data.token;
        console.log(token)
        axios.post('/products', value, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        // dispatch(registerUser(regUser))
    };

    return (
        <div className='container my-4'>
            <div className='col-md-4 offset-md-4'>
                <h4 className='text-center'>Add Products</h4>
                <Formik className='res-form w-100 registration'
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {(value) => (
                         <Form>
                            <div className='form-group'>
                                <label htmlFor='name'>Product name</label>
                                <Field className='form-control' name='name' id='name' type='text' />
                                <ErrorMessage name='name' render={msg => <div className='input-error'>{msg}</div>} />
                            </div>
    
                            <div className='form-group'>
                                <label htmlFor='category'>Category</label>
                                <Field className='form-control' name='category' id='category' type='text' />
                                <ErrorMessage name='category' render={msg => <div className='input-error'>{msg}</div>} />
                            </div>
    
                            <div className='form-group'>
                                <label htmlFor='image'>Image Link</label>
                                <Field className='form-control' name='image' id='image' type='text' />
                                <ErrorMessage name='image' render={msg => <div className='input-error'>{msg}</div>} />
                            </div>
    
                            <div className='form-group'>
                                <label htmlFor='price'>Price ($)</label>
                                <Field className='form-control' name='price' id='price' type='number' />
                                <ErrorMessage name='price' render={msg => <div className='input-error'>{msg}</div>} />
                            </div>
                            
                            <div className='form-group'>
                                <label htmlFor='brand'>Brand Name</label>
                                <Field className='form-control' name='brand' id='brand' type='text' />
                                <ErrorMessage name='brand' render={msg => <div className='input-error'>{msg}</div>} />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='rating'>Rating</label>
                                <Field className='form-control' name='rating' id='rating' type='number' />
                                <ErrorMessage name='rating' render={msg => <div className='input-error'>{msg}</div>} />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='stock'>Stock</label>
                                <Field className='form-control' name='stock' id='stock' type='number' />
                                <ErrorMessage name='stock' render={msg => <div className='input-error'>{msg}</div>} />
                            </div>

                            <button className='btn btn-block res-btn mt-4' type='submit'>Add Product</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Registration
