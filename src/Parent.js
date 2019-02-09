// sample file for learning children api
import React, {Component, Children} from 'react';

class Parent extends Component {
  render() {
    return (
      <div>
      {/* used for restricting only one child rendering possible use case making Layout hoc.
      React.Children.only expected to receive a single React element child.
      {Children.only(this.props.children)} */}

      {/* Gives the count of all the childrens directly under the parent 
      Total childrens: {Children.count(this.props.children)} */}
      {this.props.children}
    </div>
    
    )
    
  }

}

export default Parent;