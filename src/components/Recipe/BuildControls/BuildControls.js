import React, { Component } from 'react';
import styles from './BuildControls.module.css';
import BuildControl from  './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    
];

const buildControls = (props) => (
    <div className={ styles.BuildControls}>
        <button className={ styles.OrderButton}  disabled={!props.purchasable} onClick={props.purchaseMode}>ORDER NOW</button>
        <p className={styles.Price}>Price : {props.totalPrice.toFixed(2)}</p>
        {controls.map((ctrl) => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}  
            added={ () => props.ingredientUpdated(ctrl.type)}
            removed = {() => props.ingredientRemoved(ctrl.type)}
                disabled = {props.disabled[ctrl.type] }/>
        ))}

    </div>
);

export default buildControls;

