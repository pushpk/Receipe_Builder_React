import React, { Component } from 'react';

class Validation extends Component {
    render(props){

       let charmsg = null;
        if(this.props.charlimit < 5){
            charmsg = (<p>Text too small!</p>)
        }
        if(this.props.charlimit > 10){
            charmsg = (<p>Text too long!</p>)
        }

        return(
            <div>
              {charmsg}
            </div>
        )
    }
}

export default Validation