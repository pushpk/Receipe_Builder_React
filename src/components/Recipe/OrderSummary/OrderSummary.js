import React from 'react';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {

    const ingredientSummary =  Object.keys(props.ingredients).map((igkey) => {

    return <li key={igkey}>
        <span style={{textTransform : 'capitalize'}}>{ igkey } </span>: {props.ingredients[igkey]}
        </li>

    });
        return(
            <>
            <h3>Your Order</h3>
            <p>Delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue o Checkout?

            </p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
            </>

        );
}

export default orderSummary;