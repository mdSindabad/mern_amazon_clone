import React from 'react';

function Product(props) {
    const {product, image, _id, name, price} = props.product;
    return (
        <div onClick={() => props.handleClick(_id)} key={_id} className='col-md-4 col-12 product' >
            <div className='product-img'>
                <img src={image} alt='product' />
            </div>
            <div className='product-details'>
                <h4>{name}</h4>
                <h6>$ {price}</h6>
            </div>
        </div>
    )
}

export default Product
