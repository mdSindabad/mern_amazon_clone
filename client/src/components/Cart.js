import React from 'react';
import CartItem from './CartItem';
import {data} from '../data';

function Cart() {



    return (
        <div className='container cart'>
            <div className='row'>
                <div className='col-md-9'>
                    <div className='cart-titles'>
                        <h2>Shopping Cart</h2>
                        <p className='price-title'>Price</p>
                    </div>
                    <div className='row'>
                        {data.map(product => (
                            <CartItem product={product} />
                        ))}
                    </div>
                </div>
                <div className='col-md-3'>
                    <h6>Subtotal (2 items): $ 100.99</h6>
                    <button className='btn btn-block mt-2 checkout'>Proceed to Checkout</button>
                </div>
                
            </div>
        </div>
    )
}

export default Cart
