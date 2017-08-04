import React, {Component} from 'react';
import Card from './Card';
import Button from './Button';
import './../CSS/Main.css';
import { getScore } from './../Helpers/functions';
import $ from 'jquery';

class Main extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {title : "Fight!", firstCard : "card" , secondCard : "card", status : "Vs.", result : "versus", fight : false};
  }

  handleClick(){
    if (this.state.fight === false) {
      const firstGit = getScore($('#git-1').val());
      const secondGit = getScore($('#git-2').val());
      Promise.all([firstGit, secondGit])
        .then(winner => {
          console.log(winner[0].name)
          console.log(winner[0].score)
          console.log(winner[1].name)
          console.log(winner[1].score)
          if(winner[0].score > winner[1].score){
            this.setState({
              firstCard : "winner"
            });
          }else if (winner[1].score > winner[0].score){
            this.setState({
              secondCard : "winner"
            });
          }else {
            this.setState({
              status : "Empate!!"
          });
        }
      })
        this.setState({
          fight: !(this.state.fight),
          title : "Limpar"
        })
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
    let mainContent = (
      <div id="mainContent">
        <Card id = "1" winner= {this.state.firstCard}/>
        <div className = "result-container">
          <h1 className = {this.state.result}> {this.state.status} </h1>
        </div>
        <Card id = "2" winner = {this.state.secondCard}/>
        <Button id = "fight" onClick = {this.handleClick} title = {this.state.title}/>
      </div>
    )
    return mainContent;
  }
}

export default Main;
