function computerPlay() {
    // Returns the selection of the computer.
    const val = Math.floor (Math.random() * 3) + 1;

    switch(val) {
        case 1:
            return 'ROCK';
        
        case 2: 
            return 'PAPER';

        case 3:
            return 'SCISSORS';
    }
}

function playRound(playerSelection, i, score) {
    playerSelection = playerSelection.toUpperCase();
    const computerSelection = computerPlay();
    let flag;

    if ((playerSelection == "ROCK" & computerSelection == "PAPER") | (playerSelection == "PAPER" & computerSelection == "SCISSORS") | (playerSelection == "SCISSORS" & computerSelection == "ROCK")) {
        //player loses
        flag = -1;
        score[0]++;
    }
    else if (playerSelection == computerSelection) {
        //round draw
        flag = 0;
        score[0]++;
        score[1]++;
    }
    else {
        //player wins
        flag = 1;
        score[1]++;
    }

    roundResult(flag, i, computerSelection, playerSelection, score);
} 

function roundResult(result, i, computerSelection, playerSelection, score) {

    /*const parent = document.getElementsByClassName("content");
    
    if(parent.length > 0){
        parent[0].remove();
    }*/
    
    const body = document.querySelector('.result');
    const content = document.createElement('div');
    content.classList.add('content');

    switch(result) {
        case -1:
            content.textContent = `ROUND ${i}: You LOSE!!! ${computerSelection} beats ${playerSelection}.
            Current score is Computer: ${score[0]} You: ${score[1]} `;
            break;

        case 0:
            content.textContent = `ROUND ${i}: It's a TIE. 
            Current score is Computer: ${score[0]} You: ${score[1]}`;
            break;

        case 1:
            content.textContent = `ROUND ${i}: You WIN!!! ${playerSelection} beats ${computerSelection}. 
            Current score is Computer: ${score[0]} You: ${score[1]}`;
    }

    body.appendChild(content);

   if(i == 5)
        gameResult(score);
}

function gameResult(score) {  
    const body = document.querySelector('.result');
    const content = document.createElement('div');
    content.classList.add('finalScore');

    content.textContent = `FINAL SCORE is Computer: ${score[0]} You: ${score[1]}`;
    body.appendChild(content);
    
}

function game() {

    const buttons = document.querySelectorAll('button');
    let i = 1;
    let score = [0 , 0];
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(i <= 5)
                playRound(button.id, i++, score);
        });
    }); 
}

game();