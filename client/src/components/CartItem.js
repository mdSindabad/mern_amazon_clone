import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {remove_from_cart} from '../redux/actions/cartActions';


function CartItem({product}) {
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(remove_from_cart(id));
    };

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
                    <img src={product.image} alt='product image' />
                </div>
                <div className='col-8'>
                    <h5 className='product-name'>{product.name}</h5>
                    <p>In Stock</p>
                    <select>
                        {
                            setOption()
                        }
                    </select>
                    <button onClick={() => handleClick(product._id)} className='btn btn-danger delete-btn'>Delete</button>
                </div>
                <div className='col-2'>
                    <div className='product-price'>
                        <p><b>$ {product.price}</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
