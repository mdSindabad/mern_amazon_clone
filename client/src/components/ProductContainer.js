import React, { useEffect, Fragment } from 'react';
import {data} from '../data';
import Product from './Product';
import Banner from './Banner';

function ProductContainer(props) {

    const handleClick = (id) => {
        props.history.push(`/product/id=${id}`)
    };

    return (
        <Fragment>
            <Banner />
            <div className='container product-container'>
                <div className='row d-flex flex-column flex-md-row justify-content-around'>
                    {data.map(product => 
                        <Product product={product} handleClick={handleClick} />
                    )}
                </div>
            </div>
        </Fragment>
    )
}

export default ProductContainer
