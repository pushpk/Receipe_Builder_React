import React,{ Component } from "react";
import Recipe from '../../components/Recipe/Recipe'
import BuildControls from '../../components/Recipe/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from  '../../components/Recipe/OrderSummary/OrderSummary'

const INGREDIENT_PRICE = {
    salad : 0.5,
    cheese : 0.4,
    meat : 0.8,
    bacon : 0.5
}
class RecipeBuilder extends Component{
   
    state = {
        ingredients : {
            salad: 0,
            meat : 0,
            bacon : 0,
            cheese : 0
           
        },
        totalPrice : 4,
        purchasable : false,
        purchasing: false
    }

    purchaseHandler(){
        this.setState({purchasing : true});

    }
    updatePurchaseState(ingredients){
      

        const sum = Object.keys(ingredients)
                    .map(igKey => {
                        return ingredients[igKey]
                    })
                    .reduce((sum, el) => {
                        return sum + el;
                    },0);

        this.setState({purchasable : sum > 0})


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

      this.updatePurchaseState(updatedIngredients);


      
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
         { ingredients : updatedIngredients, totalPrice: newPrice });
         this.updatePurchaseState(updatedIngredients);

        
    }

    purchaseCancel(){
        this.setState({purchasing : false});
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
           <Modal show={this.state.purchasing} modalClosed={() => this.purchaseCancel()}>
               <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
           </Modal>
           <div style={style}>
            <Recipe ingredients={this.state.ingredients}/>
           </div>
           <BuildControls ingredientUpdated={(event) => this.addIngredientHandler(event)}  
           ingredientRemoved = {(event) => this.removeIngredientHandler(event)}
           disabled= {disabledInfo}
           totalPrice = { this.state.totalPrice}
           purchasable = {this.state.purchasable}
           purchaseMode = {() => this.purchaseHandler()}
           />
           
           </> 
        );
    }
}

export default RecipeBuilder;