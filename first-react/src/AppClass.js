import React, { Component } from 'react'
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter : 0,
            choice : null,
            computerChoice : null,
            result : null
        }

        this.choices = {
            rock : {
                name : 'Rock',
                img : 'rock',
            },
            scissors : {
                name : 'Scissors',
                img : 'scissors'
            },
            paper : {
                name : 'Paper',
                img : 'paper'
            }
        }
    }

    increase = () => {
        this.setState({
            counter : this.state.counter + 1,   
        })
    }
    
    play = (userChoice) => {
        this.setState({
            choice : userChoice,
            computerChoice : this.randomChoice,
            result : this.judgement(this.state.choice, this.state.computerChoice)
        })
    };

    judgement = (user, computer) => {
        if(user == computer) {
        return 'tie';
        } else if(user == 'rock') 
        return computer == "scissors" ? "win" : "lose"
        else if(user == 'scissors') 
        return computer == "paper" ? "win" : "lose"
        else if(user == 'paper') 
        return computer == "rock" ? "win" : "lose"
    }

    randomChoice = () => {
        let itemArray = Object.keys(this.choices); 
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];

        return this.choices[final]
    }
  render() {
    return (
      <div>
        <div>state : { this.state.counter }</div>
        <button onClick = { this.increase }>button</button>

        <div className="box-container">
            <BoxClass title="you" item={ this.state.choice } result= {this.state.result}/>
            <BoxClass title="computer" item={ this.state.computerChoice } result={this.state.result}/>
        </div>
        <div className="button-container">
            <button onClick = {  this.play('scissors') }>가위</button>
            <button onClick = {  this.play('rock') }>바위</button>
            <button onClick = {  this.play('paper') }>보</button>
        </div> 

      </div>
    )
  }
}
