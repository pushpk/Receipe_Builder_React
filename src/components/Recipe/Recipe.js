import React from 'react'
import styles from './RecipeIngredient/RecipeIngredient.module.css'
import RecipeIngredient from './RecipeIngredient/RecipeIngredient'

const Recipe = (props) => {

    let transformedIngredients = Object.entries(props.ingredients).map((ingr) => {
        if(ingr[1] > 0)
        {
            return [...Array(ingr[1] )].map(() => {
                return <RecipeIngredient key={ingr[0] + ingr[1] + Math.random()} type={ingr[0]} />
            });
        } 
    }).reduce((arr, el) => { 
        return arr.concat(el)  },[]);

    console.log(transformedIngredients)

    if(transformedIngredients.length === 0)
    {
        transformedIngredients = <p>Please add something to burger </p>
    }
    return (



        <div className={styles.Recipe}>
            <RecipeIngredient type="bread-top" />
            {transformedIngredients}
            <RecipeIngredient type="bread-bottom" />


        </div>

    );

};

export default Recipe