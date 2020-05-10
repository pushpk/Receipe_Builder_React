import React, { Component } from 'react';

class UserOutput extends Component{

    render(props){
        return(
            <div>
             <p>{ this.props.name}</p>
            <p>{ this.props.job}</p>
            <hr />
            </div>
        )
    }
}


export default UserOutput