const div = document.querySelector(".result");
const divScore = document.querySelector(".score");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
let playerWinCount = 0;
let computerWinCount = 0;

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
        game(result);
        
    } else if(player == "rock" && computer == "1"){
        div.textContent = "Paper beats rock, computer wins!";
        result = "computer wins";
        game(result);
        
    } else if(player == "rock" && computer == "2"){
        div.textContent = "Rock beats scissors, player wins!";
        result = "player wins";
        game(result);
        
    } else if(player == "paper" && computer == "0"){
        div.textContent = "Paper beats rock, player wins!";
        result = "player wins";
        game(result);
        
    } else if(player == "paper" && computer == "1"){
        div.textContent ="Tie.";
        result = "no winner";
        game(result);
        
    } else if(player == "paper" && computer == "2"){
        div.textContent ="Scissors beats paper, computer wins!";
        result = "computer wins";
        game(result);
        
    } else if(player == "scissors" && computer == "0"){
        div.textContent ="Rock beats scissors, computer wins!";
        result = "computer wins";
        game(result);
        
    } else if(player == "scissors" && computer == "1"){
        div.textContent ="Scissors beats paper, player wins!";
        result = "player wins";
        game(result);
        
    } else if(player == "scissors" && computer == "2"){
        div.textContent = "Tie.";
        result = "no winner";
        game(result);
        
    } else {
        div.textContent = "Try something else!";
        result = "wrong input";
        game(result);
        
    }
}


function game(result){
    const winner = result;

    if(winner == "player wins"){
        playerWinCount = playerWinCount + 1;
        return playerWinCount;
    } else if(winner == "computer wins"){
        computerWinCount = computerWinCount + 1;
        return computerWinCount;
    }
    
    /*if(playerWinCount > computerWinCount){
        divScore.textContent = "Player wins!";
    } else if(playerWinCount < computerWinCount){
        divScore.textContent = "Computer wins!";
    } else {
        divScore.textContent = "Tie!";
    }*/
}


// event listeners
rockBtn.addEventListener("click", () => {
    let player = "rock";
    let comp = computerPlay();
    playRound(player, comp);
});
paperBtn.addEventListener("click", () => {
    let player = "paper";
    let comp = computerPlay();
    playRound(player, comp);
});
scissorsBtn.addEventListener("click", () => {
    let player = "scissors";
    let comp = computerPlay();
    playRound(player, comp);
});