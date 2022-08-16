
const playerScoreDiv = document.getElementById('player-score')
const handsDiv = document.getElementById('hands')
const resultDiv = document.getElementById('result')
const rps = ['Rock','Paper','Scissors']

function getComputerChoice() {
  let computerChoice = rps[Math.floor(Math.random()*3)]
  return computerChoice
}

function getResult(playerChoice, computerChoice) {
 
  let score ;
  
  if(playerChoice == computerChoice){
    score = 0
  }
  else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
    score = 1
  }
  else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
    score = 1
  }
  else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
    score = 1
  }
  else if(playerChoice == 'Rock' && computerChoice == 'Paper'){
    score = -1
  }
  else if(playerChoice == 'Paper' && computerChoice == 'Scissors'){
    score = -1
  }
  else if(playerChoice == 'Scissors' && computerChoice == 'Rock'){
    score = -1
  }
  return score 
}

// ** Calculate who won and show it on the screen **
function showResult(score, playerChoice, computerChoice) {
  
  if(score == -1){
    resultDiv.innerText = 'You Lose!'
  }else if(score == 0){
    resultDiv.innerText = "It's a tie"
  }else{
    resultDiv.innerText = 'You Won!'
  }
  handsDiv.innerText = `👨🏾 ${playerChoice} and 🤖 ${computerChoice}`
  playerScoreDiv.innerText = `${Number(playerScoreDiv.innerText) + score}`
  
}

function onClickRPS(playerChoice) {
  let computerChoice = getComputerChoice()
  let score = getResult(playerChoice, computerChoice)
  showResult(score, playerChoice, computerChoice)
  return playerChoice
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  playerScoreDiv.innerText = ''
  handsDiv.innerText = ''
  resultDiv.innerText = ''
}
