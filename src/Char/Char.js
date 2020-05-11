import React, { Component } from 'react';

class Char extends Component {

render(props){
    return(
        <div className="charComponent" onClick={this.props.deleteHandler}> 
           {this.props.letter} 
        </div>
    )
}
}

export default Char