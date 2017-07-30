import React, {Component} from 'react';
import './../CSS/Card.css';
import Button from './../Components/Button';
import Loading from './../Components/Loading';
import $ from 'jquery';
import { getUser} from './../Helpers/functions';

class Card extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {link : "https://github.com/", title : "GitHub", name : "Insira o usuário!", value : "", status : "N"}
  }

  handleClick(e){
    let id = this.props.id;
     let image = "#image-" + id;
     let input = "#git-" + id;
     let loading = "#loading-" + id;
     let value = $(input).val();
     let state = this;
     console.log(e);
     if (value !== this.state.value) {
       getUser(value, id, image, state, loading);
     }

   };

  render(){
    const structure = (
      <div className = "container">
        <div className = "card" key="N" id = {'card-' + this.props.id }>
        <div></div>
          <a href = {this.state.link} title ={this.state.title}>
            <div className = "image" id = {"image-" + this.props.id}>
              <Loading id = {"loading-" + this.props.id}/>
            </div>
          </a>
          <span className = "name">{this.state.name}</span>
          <input type= "text" placeholder="Git Account" className ="inputField" id = {"git-" + this.props.id}/>
          <Button onClick={this.handleClick} on />
        </div>
      </div>
    );
    return structure;
  }
}


export default Card;
