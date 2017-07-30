import React, {Component} from 'react';
import './../CSS/NavBar.css';
class NavBar extends Component{
  render(){
    const navItens = ["Git Battle"];
    const navFinal = navItens.map((item, i) =>
      <div className = "item" key = {"nav-item-" + i} ><div className = "text"><a href ={"/" + (i===0 ? "home" : item.toLowerCase())}>{item}</a></div></div>
    );
    return <nav>{ navFinal }</nav>;
  }
}

export default NavBar;
