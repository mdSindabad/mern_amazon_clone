import React from 'react'
import ProcessWizard from './ProcessWizard';
import {useSelector, useDispatch} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { remove_shipping_address } from '../redux/actions/shippingActions.js';
import { clear_cart } from '../redux/actions/cartActions';

toast.configure()


function OrderPage(props) {
    const dispatch = useDispatch();

    // data from redux store
    const shippingAddress = useSelector(state => state.shippingReducer);
    const cartItems = useSelector(state => state.cartReducer.products);
    const user = useSelector(state => state.userReducer.user);

    // cost calculation
    const itemsCost = cartItems.reduce((acc, item) => {
        return acc + item.price * item.qty
    }, 0);
    const totalTax = (itemsCost * .15);
    const totalCost = (itemsCost + totalTax);

    // shaping shipping address
    const shippingString = Object.values(shippingAddress).join(', ');

    // checkout function
    const handleCheckout = async (token) => {
        const response = await axios.post('/checkout', {
            token,
            name: user.name,
            products: cartItems,
            amount: totalCost,
            address: shippingAddress
        });
        if(response.data.status === 'Success') {
            toast('Payment Success!', {type: 'success'});
            dispatch(clear_cart());
            dispatch(remove_shipping_address());
            props.history.push('/')
        } else {
            toast('Something went wrong!', {type: 'error'})
        }
    }

    return (
        <div className='container'>
            <ProcessWizard step1 step2 step3 step4 />
            <div className='row'>
                <div className='col-md-9'>
                    <div className='row order-page-custom-rows'>
                        <div className='col-12'>
                            <h3 className='full-length-header'>Shipping Address</h3>
                            <p>{shippingString}</p>
                        </div>
                    </div>
                    <div className='row order-page-custom-rows'>
                        <div className='col-12'>
                            <h3 className='full-length-header'>Payment Method</h3>
                            <p>Paypal</p>
                        </div>
                    </div>
                    <div className='row order-page-custom-rows'>
                        <div className='col-12'>
                            <div className='order-items-row'>
                                <h3>Order Items</h3>
                                <h6 className='order-price-title'>Price</h6>
                            </div>
                            <div className='row order-items-list'>
                                {
                                    cartItems.map(item => {
                                        return (
                                            <div key={item._id} className='col-12 order-item'>
                                                <img src={item.image} alt='product image' />
                                                <div>
                                                    <p>{item.name}</p>
                                                    <p>Qty: {item.qty}</p>
                                                </div>
                                                <div className='order-item-price'>
                                                    <p>{item.price}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div>
                        <h3 className='my-2'>Order Sumary</h3>
                        <table>
                            <tr>
                                <td>Items:</td>
                                <td className='table-right-items'>$ {itemsCost}</td>
                            </tr>
                            <tr>
                                <td>Shipping:</td>
                                <td className='table-right-items'>Free</td>
                            </tr>
                            <tr>
                                <td>Tax:</td>
                                <td className='table-right-items'>$ {totalTax.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td className='order-total'>Order Total:</td>
                                <td className='table-right-items order-total'>$ {totalCost}</td>
                            </tr>
                        </table>
                    </div>
                    {/* <button className='btn btn-block mt-2 checkout'>Place Order</button> */}
                    <StripeCheckout
                        stripeKey={process.env.REACT_APP_STRIPE_KEY}
                        token={handleCheckout}
                        amount={totalCost * 100}
                    />
                </div>
            </div>
        </div>
    )
}

export default OrderPage
