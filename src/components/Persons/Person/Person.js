import React, { Component } from 'react';
import { render } from '@testing-library/react';

class person extends Component {
     render(props) {
          return (
               <div onClick={this.props.click}>
                    <p> I am {this.props.name} and I am {this.props.age} old!</p>
                    <p>{this.props.children}</p>
               </div>
          );
     }
}

export default person;

