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


function game(){
    let playerWinCount = 0;
    let computerWinCount = 0;
    
        const playerChoice = prompt("Rock, paper or scissors?");
        const computerChoice = computerPlay();
        const winner = playRound(playerChoice, computerChoice);

        if(winner == "player wins"){
            playerWinCount = playerWinCount + 1;
        } else if(winner == "computer wins"){
            computerWinCount = computerWinCount + 1;
        }
    
    if(playerWinCount > computerWinCount){
        console.log("Player wins!");
    } else if(playerWinCount < computerWinCount){
        console.log("Computer wins!");
    } else {
        console.log("Tie!");
    }
    console.log(playerWinCount);
    console.log(computerWinCount);
}

game();

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

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

const div = document.querySelector(".result");
const divScore = document.querySelector(".score");