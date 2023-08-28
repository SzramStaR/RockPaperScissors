document.addEventListener("DOMContentLoaded", function () {
    const choices = ["rock", "paper", "scissors"];
    let userScore = 0;
    let oppScore = 0;

    const icons = document.querySelectorAll(".button");
    const userScoreDisplay = document.getElementById("user_score").querySelectorAll("#score_text")[1];
    const oppScoreDisplay = document.getElementById("opp_score").querySelectorAll("#score_text")[1];

    icons.forEach(icon => {
        icon.addEventListener("click", function () {
            if (userScore < 5 && oppScore < 5) {
                const userChoice = icon.id;
                const oppChoice = choices[Math.floor(Math.random() * 3)]; // Computer's choice
                const result = determineWinner(userChoice, oppChoice);
                updateScores(result);

                if (userScore === 5 || oppScore === 5) {
                    endGame();
                }
            }
        });
    });

    function determineWinner(userChoice, oppChoice) {
        if (userChoice === oppChoice) {
            return "draw";
        } else if (
            (userChoice === "rock" && oppChoice === "scissors") ||
            (userChoice === "paper" && oppChoice === "rock") ||
            (userChoice === "scissors" && oppChoice === "paper")
        ) {
            return "user";
        } else {
            return "opponent";
        }
    }

    function updateScores(result) {
        if (result === "user") {
            userScore++;
        } else if (result === "opponent") {
            oppScore++;
        }

        userScoreDisplay.textContent = userScore;
        oppScoreDisplay.textContent = oppScore;
    }

    function endGame(){
        if (userScore == 5){
            alert("Good job. You did well.");
        } else if (oppScore == 5)
        {
            alert("Game over.")
        }
        userScore = 0;
        oppScore = 0;
        userScoreDisplay.textContent = userScore;
        oppScoreDisplay.textContent = oppScore;
    }

});