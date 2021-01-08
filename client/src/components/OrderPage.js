import React from 'react'
import ProcessWizard from './ProcessWizard';
import {useSelector} from 'react-redux';

function OrderPage() {
    // data from redux store
    const shippingAddress = useSelector(state => state.shippingReducer);
    const cartItems = useSelector(state => state.cartReducer.products);

    // cost calculation
    const itemsCost = cartItems.reduce((acc, item) => {
        return acc + item.price * item.qty
    }, 0);
    const totalTax = (itemsCost * .15);
    const totalCost = (itemsCost + totalTax);

    // shaping shipping address
    const shippingString = Object.values(shippingAddress).join(', ');
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
                    <button className='btn btn-block mt-2 checkout'>Place Order</button>
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
                </div>
            </div>
        </div>
    )
}

export default OrderPage
