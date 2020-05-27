import React,{ Component } from "react";
import Recipe from '../../components/Recipe/Recipe'
import BuildControls from '../../components/Recipe/BuildControls/BuildControls'

const INGREDIENT_PRICE = {
    salad : 0.5,
    cheese : 0.4,
    meat : 0.8,
    bacon : 0.5
}
class RecipeBuilder extends Component{
   
    state = {
        ingredients : {
            salad: 1,
            meat : 1,
            bacon : 1,
            cheese : 1
           
        },
        totalPrice : 4
    }

     
    addIngredientHandler(type){

        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        const priceAddtion = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddtion;
        updatedIngredients[type] = updatedCount;

        this.setState(
         { ingredients : updatedIngredients, totalPrice: newPrice }
      )

      
    }
    removeIngredientHandler(type){
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0)
        {
            return;
        }
        
        const updatedCount = oldCount -1 
        const updatedIngredients = {
            ...this.state.ingredients
        }
        const priceSub = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSub;
        updatedIngredients[type] = updatedCount;

        this.setState(
         { ingredients : updatedIngredients, totalPrice: newPrice })

       
    }



    render(){
        const style = {
            position :'relative'
        }

        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key] <=0
        }
      

        return(
           < >
           
           <div style={style}>
            <Recipe ingredients={this.state.ingredients}/>
           </div>
           <BuildControls ingredientUpdated={(event) => this.addIngredientHandler(event)}  
           ingredientRemoved = {(event) => this.removeIngredientHandler(event)}
           disabled= {disabledInfo}
           totalPrice = { this.state.totalPrice}
           />
           
           </> 
        );
    }
}

export default RecipeBuilder;