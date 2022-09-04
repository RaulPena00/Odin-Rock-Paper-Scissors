function getComputerChoice(){
    let choice = Math.random()*(2);
    choice = Math.round(choice);
    return choice;
}

function playerChoise(){
    let playerchoise = prompt("Chose a number : 0-Rock, 1-Paper or 2-Scissor?")
    
    return playerchoise;
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerChoise();
    computerSelection = getComputerChoice();

    if (playerSelection == 0 && computerSelection == 0){
        console.log("It's a draw! Rock and Rock");
    }
    else if (playerSelection == 1 && computerSelection == 1){
        console.log("It's a draw! Paper and Paper");
    }
    else if (playerSelection == 2 && computerSelection == 2){
        console.log("It's a draw! Scissor and Scissor");
    }
    else if (playerSelection == 0 && computerSelection == 1){
        console.log("You Lose! Paper beat's Rock");
    }
    else if (playerSelection == 0 && computerSelection == 2){
        console.log("You Won! Rock beat's Scissor");
    }
    else if (playerSelection == 1 && computerSelection == 0){
        console.log("You Won! Paper beat's Rock");
    }
    else if (playerSelection == 1 && computerSelection == 2){
        console.log("You Lose! Scissor beat's Paper");
    }
    else if (playerSelection == 2 && computerSelection == 0){
        console.log("You Lose! Rock beat's Scissor")
    }
    else if (playerSelection == 2 && computerSelection == 1){
        console.log("You Won! Scissor beat's Paper");
    }
    else if (playerSelection != 0||1||2){
        console.log("Invalid value")
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        playRound()        
     }
}

game()
