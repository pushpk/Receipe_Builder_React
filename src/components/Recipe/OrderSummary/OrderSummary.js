import React from 'react';


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
            <p>Continue to Checkout?</p>
            </>

        );
}

export default orderSummary;