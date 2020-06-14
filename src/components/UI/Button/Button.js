import React from 'react'
import style  from '../Button/Button.module.css';
import classes from '../Button/Button.module.css';

const button = (props) =>{
    return(
    <button className={[style.Button, classes[props.btnType]].join(' ')} onClick={props.clicked}>{props.children}</button>
    );
};

export default button;