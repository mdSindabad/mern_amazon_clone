import React, {useState} from 'react';
import ProcessWizard from './ProcessWizard';


function PaymentScreen(props) {

    const [payment, setPayment] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(payment) {
            props.history.push('/order')
        } else return
    };

    return (
        <div>
            <ProcessWizard step1 step2 step3 />
            <div className='col-md-4 offset-md-4 shipping'>
                <h4><b>Payment</b></h4>
                <div>
                    <form onSubmit={handleSubmit} className='form-group'>
                        <input onChange={() => setPayment(!payment)} type='radio' name='Payment' id='Payment' value={payment} />
                        <label className='ml-2' htmlFor='Payment'>Payment</label>
                        <button className='btn btn-block res-btn mt-3' type='submit'><b>Continue</b></button>
                    </form>
            </div>
        </div>
        </div>
    )
}

export default PaymentScreen
