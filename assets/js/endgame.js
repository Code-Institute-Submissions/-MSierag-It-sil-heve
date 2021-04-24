//Constants
const username = document.querySelector('#username');
const saveScore = document.querySelector('#saveScore');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 10;

//Set score stored in local storage to display as the final score on the page
finalScore.innerText = mostRecentScore;

//Event listener for entering a character in the username input to enable saving the score to the scoreboard
username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value;
})

//Function to save score and username together, sort the scores from high to low with a limit of 10 scores
saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(10);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('./scoreboard.html');
};