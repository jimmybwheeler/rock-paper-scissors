function computerPlay(){
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choice.length);
    return random;
}

function playRound(player, computer){
    
}

const playerChoice = prompt("Rock, paper or scissors?");
const computerChoice = computerPlay();

const winner = playRound(playerChoice, computerChoice);