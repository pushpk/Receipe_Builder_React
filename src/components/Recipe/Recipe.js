import React from 'react'
import styles from './RecipeIngredient/RecipeIngredient.module.css'
import RecipeIngredient from './RecipeIngredient/RecipeIngredient'

const Recipe = (props) => {

    let transformedIngredients = Object.entries(props.ingredients).map((ingr) => {
        
        if(ingr[1] > 0)
        {
            console.log(ingr)
            return <RecipeIngredient key={ingr[1]} type={ingr[0]} />
        } 
    }).reduce((arr, el) => { return arr ? arr : null },[]);

    console.log(transformedIngredients);

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