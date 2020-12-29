import React from 'react';
import {data} from '../data';
import {BsStar, BsStarFill} from 'react-icons/bs';
import { FaAllergies } from 'react-icons/fa';


function ProductDetails(props) {
    const id = props.match.url.split('=')[1];
    const product = data.find(product => product._id === id);
    const totalCost = product.price * 1.15;

    const setRating = () => {
        const rating = Math.round(product.rating);
        const arrRating = new Array();
        for(let i = 1; i <= rating; i++) {
            arrRating.push(<BsStarFill className='star' />)
        };
        while(arrRating.length < 5) {
            arrRating.push(<BsStar />)
        };
        return arrRating.map(star => star);
    };

    const setOption = () => {
        const optionArr = new Array();
        for(let i = 1; i <= product.stock; i++) {
            optionArr.push(<option>{i}</option>)
        };
        return optionArr.map(option => option);
    }


    return (
        <div className="container mt-4">
            <div className='row'>
                <div className='col-md-8'>
                    <img src={product.image} alt='product image' />
                    <div className='product-details'>
                        <h4>{product.name}</h4>
                        <p>{setRating()} <br/> {product.rating}
                        </p>
                        <h4>Price: <b className='price'>$ {product.price}</b></h4>
                        <h6>{product.brand}</h6>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='add-to-cart'>
                        <h5><b>${product.price}</b></h5>
                        <p>
                            <b>Total cost: ${totalCost.toFixed(2)} </b>
                            including vat.
                        </p>
                        {
                            product.stock > 0 ?<h6 className='in-stock'>In Stock</h6>:
                            <h6 className='out-stock'>Stock Out</h6>
                        }
                        <select>
                            {
                                setOption()
                            }
                        </select>
                        <button className='btn btn-block mt-2 add-to-cart-btn'>Add to Cart</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProductDetails
