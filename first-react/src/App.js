import { useState } from "react";
import './App.css';
import Box from './component/Box';

const choice = {
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

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState(null)

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice))
  };

  const judgement = (user, computer) => {
    if(user.name == computer.name) {
      return 'tie';
    } else if(user.name == 'Rock') 
    return computer.name == "Scissors" ? "win" : "lose"
    else if(user.name == 'Scissors') 
    return computer.name == "Paper" ? "win" : "lose"
    else if(user.name == 'Paper') 
    return computer.name == "Rock" ? "win" : "lose"
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];

    return choice[final]
  }

  return (
    <div>
      <div className="box-container">
        <Box title="you" item={userSelect} result= {result}/>
        <Box title="computer" item={computerSelect} result={result}/>
      </div>
      <div className="button-container">
          <button onClick = { () => play('scissors') }>가위</button>
          <button onClick = { () => play('rock') }>바위</button>
          <button onClick = { () => play('paper') }>보</button>
      </div> 
    </div>
  );
}

export default App;
