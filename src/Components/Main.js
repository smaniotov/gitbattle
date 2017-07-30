import React, {Component} from 'react';
import Card from './Card';
import Button from './Button';
import './../CSS/Main.css';
import { getScore, getWinner } from './../Helpers/functions';
import $ from 'jquery';

class Main extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {title : "Fight!", firstCard : "card" , secondCard : "card", status : "Vs.", result : "versus", fight : false};
  }

  handleClick(){
    if (this.state.fight === false) {
      var firstGit = getScore($('#git-1').val());
      var secondGit = getScore($('#git-2').val());
      var id = getWinner(firstGit, secondGit);
      if (id !== null || id !== undefined) {
        if (id === 1) {
          this.setState({
            firstCard : "winner"
          });
        }else if (id === 2) {
          this.setState({
            secondCard : "winner"
          });
        }else if (id === 0) {
          this.setState({
            status : "Empate!!"
          });
        }
        this.setState({
          fight: !(this.state.fight),
          title : "Limpar"
        })
      }
    }else {
      this.setState({
        firstCard : "card",
        secondCard : "card",
        status : "Vs.",
        fight: !(this.state.fight),
        title : "Fight"
      })
    }

  }
  componentWillUpdate(nextProps, nextState){
    var id = nextState.winner;
    if (id === 1){

    }
  }
  render(){
    var show = this.state.fight === false ? "none" : "static";
    let mainContent = (
      <div id="mainContent">
        <Card id = "1" winner= {this.state.firstCard}/>
        <div className = "result-container">
          <h1 className = {this.state.result}> {this.state.status} </h1>
          <div className = "winner-layer" style = {{"display" : show }}></div>
        </div>
        <Card id = "2" winner = {this.state.secondCard}/>
        <Button id = "fight" onClick = {this.handleClick} title = {this.state.title}/>
      </div>
    )
    return mainContent;
  }
}

export default Main;
