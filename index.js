function computerPlay(){
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choice.length);
    return random;
}

function playRound(player, computer){
    let result;
    if(player.toLowerCase() == "rock" && computer == "0"){
        console.log("Tie.");
        result = "no winner";
        return result;
    } else if(player.toLowerCase() == "rock" && computer == "1"){
        console.log("Paper beats rock, computer wins!");
        result = "computer wins";
        return result;
    } else if(player.toLowerCase() == "rock" && computer == "2"){
        console.log("Rock beats scissors, player wins!");
        result = "player wins";
        return result;
    } else if(player.toLowerCase() == "paper" && computer == "0"){
        console.log("Paper beats rock, player wins!");
        result = "player wins";
        return result;
    } else if(player.toLowerCase() == "paper" && computer == "1"){
        console.log("Tie.");
        result = "no winner";
        return result;
    } else if(player.toLowerCase() == "paper" && computer == "2"){
        console.log("Scissors beats paper, computer wins!");
        result = "computer wins";
        return result;
    } else if(player.toLowerCase() == "scissors" && computer == "0"){
        console.log("Rock beats scissors, computer wins!");
        result = "computer wins";
        return result;
    } else if(player.toLowerCase() == "scissors" && computer == "1"){
        console.log("Scissors beats paper, player wins!");
        result = "player wins";
        return result;
    } else if(player.toLowerCase() == "scissors" && computer == "2"){
        console.log("Tie.");
        result = "no winner";
        return result;
    } else {
        console.log("Try something else!");
        result = "wrong input";
        return result;
    }
}


function game(){
    let playerWinCount = 0;
    let computerWinCount = 0;
    for(let i = 0; i < 5; i++){
        const playerChoice = prompt("Rock, paper or scissors?");
        const computerChoice = computerPlay();
        const winner = playRound(playerChoice, computerChoice);

        if(winner == "player wins"){
            playerWinCount = playerWinCount + 1;
        } else if(winner == "computer wins"){
            computerWinCount = computerWinCount + 1;
        }
        console.log(playerWinCount);
        console.log(computerWinCount);
    }
}

game();