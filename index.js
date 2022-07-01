function computerPlay(){
    let randomArray = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * randomArray.length);
    return random;
}

function play(player, comp){
    if (player.toLowerCase() == "rock" && comp == "0"){
        console.log("Tie!");
    } else if (player.toLowerCase() == "rock" && comp == "1"){
        console.log("Paper beats rock, computer wins!");
    } else if (player.toLowerCase() == "rock" && comp == "2"){
        console.log("Rock beats scissors, player wins!");
    } else if (player.toLowerCase() == "paper" && comp == "0"){
        console.log("Paper beats rock, player wins!");
    } else if (player.toLowerCase() == "paper" && comp == "1"){
        console.log("Tie!");
    } else if (player.toLowerCase() == "paper" && comp == "2"){
        console.log("Scissors beats paper, computer wins!");
    } else if (player.toLowerCase() == "scissors" && comp == "0"){
        console.log("Rock beats scissors, computer wins!");
    } else if (player.toLowerCase() == "scissors" && comp == "1"){
        console.log("Scissors beats paper, player wins!");
    } else if (player.toLowerCase() == "scissors" && comp == "2"){
        console.log("Tie!");
    } else {
        console.log("Invalid, try again!");
    }
}

function game(player, comp){
    for (let i = 0; i < 5; i++){
        play(player, comp);
    }
}

const playerSelection = prompt("Rock, paper or scissors?");
const computerSelection = computerPlay();

game(playerSelection, computerSelection);