import React, { Component } from 'react';
import styles from './RecipeIngredient.module.css';
import PropTypes from 'prop-types'

class RecipeIngredient extends Component {
    render(props) {

        let ingredient = null

        switch (this.props.type) {
            case ('pizza'):
                ingredient = <div className={styles.Pizza}></div>
                break;
            case ('crust'):
                ingredient = <div className={styles.Crust}></div>

                break;
            case ('pizza-cheese'):
                ingredient = <div className={styles.PizzaCheese}></div>

                break;
            case ('pepperoni'):
                ingredient = <><div className={`${styles.Pepperoni} ${styles.Pep1}`}></div>
                <div className={`${styles.Pepperoni} ${styles.Pep2}`}></div>
                <div className={`${styles.Pepperoni} ${styles.Pep3}`}></div>
                <div className={`${styles.Pepperoni} ${styles.Pep4}`}></div>
                <div className={`${styles.Pepperoni} ${styles.Pep5}`}></div>
                <div className={`${styles.Pepperoni} ${styles.Pep6}`}></div>
                </>

                break;
                case ('mushroom'):
                    ingredient = <div className={styles.Mushroom}></div>
    
                    break;
                case ('olive'):
                ingredient = <div className={styles.Olive}></div>
        
                        break;
            case ('bread-bottom'):
                ingredient = <div className={styles.BreadBottom}></div>

                break;
            case ('bread-top'):
                ingredient = (<div className={styles.BreadTop}>
                    <div className={styles.Seed1}></div>
                    <div className={styles.See2}></div>
                </div>)
                break;
            case ('meat'):
                ingredient = <div className={styles.Meat}></div>
                break;
            case ('cheese'):
                ingredient = <div className={styles.Cheese}></div>
                break;
            case ('bacon'):
                ingredient = <div className={styles.Salad}></div>
                break;
            case ('salad'):
                ingredient = <div className={styles.Bacon}></div>
                break;
            default:
                console.log("HIT");

                return ingredient;

        }

        return (ingredient);
    }

}

RecipeIngredient.propTypes = {

    type: PropTypes.string.isRequired

}

export default RecipeIngredient;