import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {remove_from_cart, update_cart_qty} from '../redux/actions/cartActions';


function CartItem({product}) {
    // local state
    const [localQty, setLocalQty] = useState(product.qty)

    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(remove_from_cart(id));
    };

    const handleChange = (e) => {
        setLocalQty(e.target.value)
        const updatedProduct = {...product, qty: e.target.value}
        dispatch(update_cart_qty(updatedProduct))
    }

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
                    <select value={localQty} onChange={handleChange}>
                        {
                            setOption()
                        }
                    </select>
                    <button onClick={() => handleClick(product._id)} className='btn btn-danger delete-btn mb-1'>Delete</button>
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
