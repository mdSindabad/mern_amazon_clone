import React from 'react';

function CartItem({product}) {

    
    const setOption = () => {
        const optionArr = new Array();
        for(let i = 1; i <= product.stock; i++) {
            optionArr.push(<option>{i}</option>)
        };
        return optionArr.map(option => option);
    };


    return (
        <div className='col-12 cart-item'>
            <div className='cart-item row'>
                <div className='col-2'>
                    <img src='' alt='product image' />
                </div>
                <div className='col-8'>
                    <h5 className='product-name'>Product Name</h5>
                    <p>In Stock</p>
                    <select>
                        {
                            setOption()
                        }
                    </select>
                    <button className='btn btn-danger delete-btn'>Delete</button>
                </div>
                <div className='col-2'>
                    <div className='product-price'>
                        <p><b>$ 100</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
