import React, { Component } from 'react';
import { render } from '@testing-library/react';

class person extends Component {


     render(props) {

          const styles = {
               padding : '50px',
             
               margin : '25px',
               textAlgin : 'center',
               boxShadow : '5px 5px lightgray',
               border : '1px solid gray',
               borderRadius : '20px'
          }
     
          return (
               <div style={styles}>
                    <p onClick={this.props.click}> I am {this.props.name} and I am {this.props.age} old!</p>
                    <input type="text"  onChange={(event) => this.props.change(event)}/>
                    <p>{this.props.children}</p>
               </div>
          );
     }
}

export default person;

