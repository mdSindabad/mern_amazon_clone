import React from 'react';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';

function Cart(props) {
    const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);
    const cartItems = useSelector(state => state.cartReducer.products);
    const products = useSelector(state => state.cartReducer.products);
    const totalPrice = products.reduce((acc, currentProduct) => {
        return acc + parseInt(currentProduct.price)
    }, 0);

    const checkOut = () => {
        if(cartItems.length) {
            if(isLoggedIn) {
                props.history.push('/shipping')
            } else {
                props.history.push('/signin?redirect=shipping')
            }
        } else return
    }

    return (
        <div className='container cart'>
            <div className='row'>
                <div className='col-md-9'>
                    <div className='cart-titles'>
                        <h2>Shopping Cart</h2>
                        <p className='price-title'>Price</p>
                    </div>
                    <div className='row'>
                        {products ? products.map(product => (
                            <CartItem key={product.id} product={product} />
                        )) : null}
                    </div>
                </div>
                <div className='col-md-3 mt-5 cart-checkout'>
                    <h6>Subtotal ({products.length}): $ {totalPrice}</h6>
                    <button onClick={checkOut} className='btn btn-block mt-2 checkout'>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
