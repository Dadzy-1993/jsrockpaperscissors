// returns random number for computer turn
function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    return num;
}
// game logic
function decision(c,u) {
    if (u === c) {
        console.log('Its a draw');
        let outcomeT = ['Its a draw'];
        let outcomeV = 0;
        return [outcomeT, outcomeV];
    }
    else if (u === 0 && c === 1) {
        console.log('You lose, computer chose Paper');
        let outcomeT = ['You lose, computer chose Paper'];
        let outcomeV = 1;
        return [outcomeT, outcomeV];
    }
    else if (u === 1 && c === 2) {
        console.log('You lose, computer chose Scissors');
        let outcomeT = ['You lose, computer chose Scissors'];
        let outcomeV = 2;
        return [outcomeT, outcomeV];

    }
    else if (u === 2 && c === 0) {
        console.log('You lose, computer chose Rock');
        let outcomeT = ['You lose, computer chose Rock'];
        let outcomeV = 3;
        return [outcomeT, outcomeV];
    }
    else if (u === 0 && c === 2) {
        console.log('You win, computer chose Scissors');
        let outcomeT = ['You win, computer chose Scissors'];
        let outcomeV = 4;
        return [outcomeT, outcomeV];
    }
    else if (u === 1 && c == 0) {
        console.log('You win, computer chose Rock');
        let outcomeT = ['You win, computer chose Rock'];
        let outcomeV = 5;
        return [outcomeT, outcomeV];
    }
    else if (u === 2 && c === 1) {
        console.log('You win, computer chose Paper');
        let outcomeT = ['You win, computer chose Paper'];
        let outcomeV = 6;
        return [outcomeT, outcomeV];
    } 
}
// button press visual
function borders(choice) {
    let orig = choice.style.color;
    choice.style.boxShadow = '2px 2px azure';
    choice.style.border = '2px solid azure';
    setTimeout(function() {
        choice.style.boxShadow = orig;
        choice.style.border = orig;
     } , 130);
    }
// pointer to hand hover 
function pointer(choice) {
    choice.style.cursor = 'pointer';
}    
// text displaying result
function result(outcome) {
    document.getElementById('result-output').innerHTML = '';
    let text = document.getElementById('result-output');
    let resultText = document.createTextNode(outcome);
    text.appendChild(resultText);
    }
// scoreboard increments
function scoreboard(userScore,compScore) {
    document.getElementById('user').innerHTML = '';
    let uScore = document.getElementById('user');
    let uScoreText = document.createTextNode(userScore);
    uScore.appendChild(uScoreText);

    document.getElementById('comp').innerHTML = '';
    let cScore = document.getElementById('comp');
    let cScoreText = document.createTextNode(compScore);
    cScore.appendChild(cScoreText);
}

function scoreKeep (resultValue) {
    userWin = [4,5,6];
    compWin = [1,2,3];
    if (userWin.includes(resultValue)) {
        userScore++;
        return userScore;
    }
    else if (compWin.includes(resultValue)) {
        compScore++;
        return compScore;
    }
}
// defaults user scores to zero
let userScore = 0;
let compScore = 0;

// click the rock button
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    borders(rock);
    const compSel = computerPlay();
    let userSel = 0;
    let outcome = decision(compSel, userSel);
    result(outcome[0]);
    scoreKeep(outcome[1])
    scoreboard(userScore, compScore);
});
// click the paper button
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    borders(paper);
    const compSel = computerPlay();
    let userSel = 1;
    let outcome = decision(compSel, userSel);
    result(outcome[0]);
    scoreKeep(outcome[1])
    scoreboard(userScore, compScore);
});
// click the scissors button
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    borders(scissors);
    const compSel = computerPlay();
    let userSel = 2;
    let outcome = decision(compSel, userSel);
    result(outcome[0]);
    scoreKeep(outcome[1])
    scoreboard(userScore, compScore);
});
// mouseover button
rock.addEventListener('mouseover', pointer(rock));
paper.addEventListener('mouseover', pointer(paper));
scissors.addEventListener('mouseover', pointer(scissors));

