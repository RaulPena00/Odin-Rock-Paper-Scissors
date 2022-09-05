const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

rock.addEventListener("click", () => playRound("ROCK"));
paper.addEventListener("click", () => playRound("PAPER"));
scissor.addEventListener("click", () => playRound("SCISSOR"));


function getComputerChoice(){
    let choice = Math.random()*(2);
    choice = Math.round(choice);
    return choice;
}

function pointCounter(matchResult){
    const totalMatches = document.getElementById("matches");
    const win = document.getElementById("win");
    const lose = document.getElementById("lose");
    const drawn = document.getElementById("drawn")

    if(matchResult === "WIN"){
        win.innerHTML ++
        totalMatches.innerHTML ++
    }

    if(matchResult === "LOSE"){
        lose.innerHTML ++ 
        totalMatches.innerHTML ++ 
    }

    if(matchResult === "DRAWN"){
        drawn.innerHTML ++
        totalMatches.innerHTML ++
    }

    if (totalMatches.innerHTML == 5){
        
        if(win.innerHTML > lose.innerHTML){
            alert("You Won!")
        } 
        else if (lose.innerHTML > win.innerHTML){
            alert("You Lose!")
        }
        else if (lose.innerHTML === win.innerHTML){
            alert("It´s a Drawn!")
        }
        
        win.innerHTML = 0;
        lose.innerHTML = 0;
        drawn.innerHTML = 0;
        totalMatches.innerHTML = 0;
    }
}

function playRound(playerSelection, computerSelection){

    const results = document.getElementById("results");
    computerSelection = getComputerChoice();

    if (playerSelection === "ROCK" && computerSelection == 0){
        results.innerHTML = ("It's a draw! Rock and Rock");
        pointCounter("DRAWN")
    }
    else if (playerSelection == "PAPER" && computerSelection == 1){
        results.innerHTML = ("It's a draw! Paper and Paper");
        pointCounter("DRAWN")
    }
    else if (playerSelection == "SCISSOR" && computerSelection == 2){
        results.innerHTML = ("It's a draw! Scissor and Scissor");
        pointCounter("DRAWN")
    }
    else if (playerSelection == "ROCK" && computerSelection == 1){
        results.innerHTML =  ("You Lose! Paper beat's Rock");
        pointCounter("LOSE")
    }
    else if (playerSelection == "ROCK" && computerSelection == 2){
        results.innerHTML = ("You Won! Rock beat's Scissor");
        pointCounter("WIN")
    }
    else if (playerSelection == "PAPER" && computerSelection == 0){
        results.innerHTML = ("You Won! Paper beat's Rock");
        pointCounter("WIN")
    }
    else if (playerSelection == "PAPER" && computerSelection == 2){
        results.innerHTML = ("You Lose! Scissor beat's Paper");
        pointCounter("LOSE")
    }
    else if (playerSelection == "SCISSOR" && computerSelection == 0){
        results.innerHTML = ("You Lose! Rock beat's Scissor");
        pointCounter("LOSE")
    }
    else if (playerSelection == "SCISSOR" && computerSelection == 1){
        results.innerHTML = ("You Won! Scissor beat's Paper");
        pointCounter("WIN")
    }
    else if (playerSelection != "ROCK"||"PAPER"||"SCISSOR"){
        results.innerHTML = ("Invalid value")
    }
}


//function game(){
//    for (let i = 0; i < 5; i++) {
//        playRound()        
//     }
//}

//game()
