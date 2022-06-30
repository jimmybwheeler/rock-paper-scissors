function computerPlay(){
    let randomArray = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * randomArray.length);
    let computerSelection = random;
    return computerSelection;
}

function play(){
    
}

let playerSelection = prompt("Rock, paper or scissors?")

computerPlay();