function computerPlay(){
    let randomArray = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * randomArray.length);
    return random;
}

function play(player, comp){

}

let playerSelection = prompt("Rock, paper or scissors?")

let computerSelection = computerPlay();

play(playerSelection, computerSelection);