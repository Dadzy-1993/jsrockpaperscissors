function game() {
    let compScore = 0;
    let userScore = 0;

    for (let i = 0; i <5; i++) {

        function computerPlay() {
            let num = Math.floor(Math.random() * 3);
            return num;
        }

        function decision(c,u) {
            if (u === c) {
                console.log('Its a draw');
            }
            else if (u === 0 && c === 1) {
                console.log('You lose, computer chose Paper');
                compScore++;
            }
            else if (u === 1 && c === 2) {
                console.log('You lose, computer chose Scissors');
                compScore++;
            }
            else if (u === 2 && c === 0) {
                console.log('You lose, computer chose Rock');
                compScore++;
            }
            else if (u === 0 && c === 2) {
                console.log('You win, computer chose Scissors');
                userScore++;
            }
            else if (u === 1 && c == 0) {
                console.log('You win, computer chose Rock');
                userScore++;
            }
            else if (u === 2 && c === 1) {
                console.log('You win, computer chose Paper');
                userScore++;
            } 
        }
        let userSel = parseInt(prompt('Enter 0 for Rock, 1 for Paper or 2 for Scissors'));
        const compSel = computerPlay();

        decision(compSel, userSel);
        console.log('Computer Score:' + compScore + '\n' + 'User Score:' + userScore);
    }
    if (compScore > userScore) {
        console.log('Computer wins the tournement out of 5!');
    }
    else if (userScore > compScore) {
        console.log('You win the tournement out 5!');
    }
    else {
        console.log('Its a draw out of 5!')
    }


}

game();
