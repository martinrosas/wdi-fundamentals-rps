////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
var userChoice;
var computerChoice;
var playerWins;
var computerWins;
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var compare = function(choice1,choice2)  {
     if(choice1 === choice2) {
       console.log("The result is a tie");
     }
else if(choice1 === "rock")  {
     if(choice2 === "scissors") {
        playerWins += 1;
        console.log("Player wins, and has " + playerWins);
     }
    else {
    computerWins +=1;
    console.log("Computer wins, and has " + computerWins);
    }
}

else if(choice1 ==="paper") {
    if(choice2 ==="rock") {
    playerWins += 1;
    console.log("Player wins, and has " + playerWins);
    }   
    else {
    computerWins +=1;
    console.log("Computer wins, and has " + computerWins);
    }
}

else if(choice1 ==="scissors") { 
  if(choice2 ==="rock") {
    computerWins +=1;
    console.log("Computer wins, and has " + computerWins);
    }
    else{
    playerWins +=1;
    console.log("Player wins, and has " + playerWins);}
    }
};
//compare(userChoice,computerChoice);

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    playerWins = 0;
    computerWins = 0;
     while (playerWins <5 && computerWins <5) {
    userChoice = prompt("Do you choose rock, paper or scissors?");
    computerChoice = Math.random();
     if (computerChoice < 0.34) {
    computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    computerChoice = "paper";
    } else {
    computerChoice = "scissors";
   } console.log("Computer: " + computerChoice);
   
    compare(userChoice,computerChoice);
}
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

playToFive(); //play the game