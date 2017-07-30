import React, {Component} from 'react';
import './../CSS/Button.css';

class Button extends Component{

  render(){
    return (
      <button onClick = { this.props.onClick } id = {this.props.id}>
        {this.props.title.toUpperCase()}
      </button>
    )
  }
}
Button.defaultProps = {title : 'Set Fighter', id : null};
export default Button;
