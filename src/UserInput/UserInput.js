import React, { Component } from 'react';


class UserInput extends Component{

    render(props){
        return(
        <input type="text" onChange={this.props.changeName}/>
        )

    }
}

export default UserInput;