import React, { Component } from 'react';
import styles from './BuildControls.module.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    
];

const buildControls = (props) => (
    <div className={ styles.BuildControls}>

    </div>
);

export default buildControls;

