import React,{ Component } from "react";
import Recipe from '../../components/Recipe/Recipe'
class RecipeBuilder extends Component{
   
    state = {
        ingredients : {
            salad: 2,
            bacon : 0,
            cheese : 0,
            meat : 0
        }
    }

    render(){
        const style = {
            position :'relative'
        }
        return(
           < >
           <div style={style}>
            <Recipe ingredients={this.state.ingredients}/>
           </div>
           <div>Controls</div>
           </> 
        );
    }
}

export default RecipeBuilder;