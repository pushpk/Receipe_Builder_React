import React, { Component } from 'react';
import styles from './BuildControlSingle.module.css';

const buildControlsingle = (props) => (
    <div className={styles.BuildConrol}>
        <div className={styles.Label}>{this.props.label}</div>
        <button className={styles.Less}>Less</button>
        <button className={styles.More}>More</button>
    </div>
);

export default buildControls;