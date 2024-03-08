const messageElement = document.getElementById('message');
const userScoreElement = document.getElementById('userScore');
const computerScoreElement = document.getElementById('computerScore');
let userScore = 0;
let computerScore = 0;
function handleKeyPress(event) {
  const pressedKey = event.keyCode;
  const computerKey = Math.floor(Math.random() * 26) + 65; // Generate A-Z key code
  if(pressedKey === computerKey){
    userScore++;
    userScoreElement.textContent = "User Score: " + userScore;
    messageElement.textContent = "Keys Match!";
  } else {
    computerScore++;
    computerScoreElement.textContent = "Computer Score: " + computerScore;
    messageElement.textContent = "Keys Don't Match!";
  }
}
document.addEventListener('keydown', handleKeyPress);