function computerPlay(){
    let randomArray = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * randomArray.length);
    return random;
}

function play(player, comp){
    if (player == "rock" && comp == "0"){
        console.log("Tie");
    } else if (player == "rock" && comp == "1"){
        console.log("Paper beats rock, computer wins!");
    } else if (player == "rock" && comp == "2"){
        console.log("Rock beats scissors, player wins!");
    }
}

let playerSelection = prompt("Rock, paper or scissors?")

let computerSelection = computerPlay();

play(playerSelection, computerSelection);