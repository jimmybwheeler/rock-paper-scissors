const div = document.querySelector(".result");
const divScore = document.querySelector(".score");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

function computerPlay(){
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choice.length);
    return random;
}

function playRound(player, computer){
    let result;
    if(player == "rock" && computer == "0"){
        div.textContent = "Tie.";
        result = "no winner";
        return result;
    } else if(player == "rock" && computer == "1"){
        div.textContent = "Paper beats rock, computer wins!";
        result = "computer wins";
        return result;
    } else if(player == "rock" && computer == "2"){
        div.textContent = "Rock beats scissors, player wins!";
        result = "player wins";
        return result;
    } else if(player == "paper" && computer == "0"){
        div.textContent = "Paper beats rock, player wins!";
        result = "player wins";
        return result;
    } else if(player == "paper" && computer == "1"){
        div.textContent ="Tie.";
        result = "no winner";
        return result;
    } else if(player == "paper" && computer == "2"){
        div.textContent ="Scissors beats paper, computer wins!";
        result = "computer wins";
        return result;
    } else if(player == "scissors" && computer == "0"){
        div.textContent ="Rock beats scissors, computer wins!";
        result = "computer wins";
        return result;
    } else if(player == "scissors" && computer == "1"){
        div.textContent ="Scissors beats paper, player wins!";
        result = "player wins";
        return result;
    } else if(player == "scissors" && computer == "2"){
        div.textContent = "Tie.";
        result = "no winner";
        return result;
    } else {
        div.textContent = "Try something else!";
        result = "wrong input";
        return result;
    }
}


function game(choice, result){
    let playerWinCount = 0;
    let computerWinCount = 0;
    
    
    const winner = result;

    if(winner == "player wins"){
        playerWinCount = playerWinCount + 1;
    } else if(winner == "computer wins"){
        computerWinCount = computerWinCount + 1;
    }

    divScore.textContent = "player: " + playerWinCount + " " + "computer: " + computerWinCount;
    
    /*if(playerWinCount > computerWinCount){
        divScore.textContent = "Player wins!";
    } else if(playerWinCount < computerWinCount){
        divScore.textContent = "Computer wins!";
    } else {
        divScore.textContent = "Tie!";
    }*/
}



function playerChoice(){
    rockBtn.onclick = function(){
        return choice;
    }
    paperBtn.onclick = function(){
        return choice;
    }
    scissorsBtn.onclick = function(){
        return choice;
    }
}

let choice = playerChoice();

rockBtn.addEventListener("click", () => {
    let player = "rock";
    let comp = computerPlay();
    let result = playRound(player, comp);
    game(choice, result);
});
paperBtn.addEventListener("click", () => {
    let player = "paper";
    let comp = computerPlay();
    let result = playRound(player, comp);
    game(choice, result);
});
scissorsBtn.addEventListener("click", () => {
    let player = "scissors";
    let comp = computerPlay();
    let result = playRound(player, comp);
    game(choice, result);
});