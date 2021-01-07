import React from 'react'

function ProcessWizard(props) {
    return (
        <div className='process-wizard'>
            <div className={props.step1 ? 'active' : ''}>Sign-In / Register</div>
            <div className={props.step2 ? 'active' : ''}>Shipping</div>
            <div className={props.step3 ? 'active' : ''}>Payment</div>
            <div className={props.step4 ? 'active' : ''}>Place Order</div>  
        </div>
    )
}

export default ProcessWizard
