let userScore = 0;
let botScore = 0;
let gameCount = 0;
				
alert("Rock, Paper, Scissors");
// for the robot: 1 = rock, 2 = paper, 3 = scissors
while (gameCount <= 6) {
  let botChoice = Math.floor((Math.random() * 3) + 1);
  let userChoice = prompt("Rock, paper, or scissors");
  if (userChoice == "rock" && botChoice == 1) {
    alert("Draw!");
    gameCount++;
  } else if (userChoice == "rock" && botChoice == 2) {
    alert("Bot wins!, Paper beats rock!");
    botScore += 1;
    gameCount++;
    alert("Bot score: " + botScore);
    alert("Your score: " + userScore);
  } else if (userChoice == "rock" && botChoice == 3) {
    alert("You win! Rock smashes paper!");
    userScore += 1;
    gameCount++;
    alert("Bot score: " + botScore);
    alert("Your score: " + userScore);
  }

  if (userChoice == "paper" && botChoice == 2) {
    alert("Draw!");
    gameCount++;
  } else if (userChoice == "paper" && botChoice == 1) {
    alert("You win!, Paper beats rock!");
    userScore += 1;
    gameCount++;
    alert("Bot score: " + botScore);
    alert("Your score: " + userScore);
  } else if (userChoice == "paper" && botChoice == 3) {
    alert("Bot wins! Rock smashes scissors!");
    botScore += 1;
    gameCount++;
    alert("Bot score: " + botScore);
    alert("Your score: " + userScore);
  }

  if (userChoice == "scissors" && botChoice == 3) {
    alert("Draw!");
    gameCount++;
  } else if (userChoice == "scissors" && botChoice == 2) {
    alert("You win!, Scissors beats paper!");
    userScore += 1;
    gameCount++;
    alert("Bot score: " + botScore);
    alert("Your score: " + userScore);
  } else if (userChoice == "scissors" && botChoice == 1) {
    alert("Bot wins! Rock smashes scissors!");
    botScore += 1;
    gameCount++;
    alert("Bot score: " + botScore);
    alert("Your score: " + userScore);
  }
}
document.write("Your score: " + userScore + "<br/>");
document.write("Bot score: " + botScore);
if (userScore < botScore) {
  alert("Game over!");
  alert("The Bot has won the game!");
} else if (userScore > botScore) {
  alert("Game over!");
  alert("You have won the game!");
} else {
  alert("Game over!");
  alert("Draw!");
}
