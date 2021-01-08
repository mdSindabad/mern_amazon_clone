import React, { useEffect, Fragment } from 'react';
import Product from './Product';
import Banner from './Banner';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from'../redux/actions/productActions';

function ProductContainer(props) {
    const dispatch = useDispatch();
    const {isLoading, products, error} = useSelector(state => state.productReducer)
 
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    const handleClick = (id) => {
        props.history.push(`/product/id=${id}`)
    }; 

    return (
        <Fragment>
            <Banner />
            <div className='container product-container'>
                <div className='row d-flex flex-column flex-md-row justify-content-around'>
                {
                    isLoading ?
                         (<h3 className='mt-5'>Loading...</h3>)
                    :
                        products.map(product => 
                            <Product key={product._id} product={product} handleClick={handleClick} />
                        )
                }
                </div>
            </div>
        </Fragment>
    )
}

export default ProductContainer
