
//This variable is to keep track of score.
var score = 0;

/*
This is the first question, its answer
and how it handles the users input to generate 
their score.
*/
var questionOne = prompt("What is the name of SEGA's blue mascot?");
var questionOneAnswerA = "SONIC";
var questionOneAnswerB = "SONIC THE HEDGEHOG";

if (questionOne.toUpperCase() === questionOneAnswerA || questionOneAnswerB ) {
  score += 1;
  alert("That is correct!");
} else {
  alert("That is incorrect!");
}

/*
This is the second question, its answer
and how it handles the users input to generate 
their score.
*/
var questionTwo = prompt("Where did Gordon Freeman work?");
var questionTwoAnswer = "BLACK MESA";
if (questionTwo.toUpperCase() === questionTwoAnswer) {
  score += 1;
  alert("That is correct!");
} else {
  alert("That is incorrect!");
}

/*
This is the third question, its answer
and how it handles the users input to generate 
their score.
*/
var questionThree = prompt("What colour is Megaman's friend, Protoman?");
var questionThreeAnswer = "RED";
if (questionThree.toUpperCase() === questionThreeAnswer) {
  score += 1;
  alert("That is correct!");
} else {
  alert("That is incorrect!");
}

/*
This is the fourth question, its answer
and how it handles the users input to generate 
their score.
*/
var questionFour = prompt("What is the name of Ryo Hazuki's hometown?");
var questionFourAnswer = "YAMANOSE";
if (questionFour.toUpperCase() === questionFourAnswer) {
  score += 1;
  alert("That is correct!");
} else {
  alert("That is incorrect!");
}

/*
This is the fifth question, its answer
and how it handles the users input to generate 
their score.
*/
var questionFive = prompt("What is Ness's main weapon?");
var questionFiveAnswerA = "BASEBALL BAT";
var questionFiveAnswerB = "A BASEBALL BAT";

if (questionFive.toUpperCase() === questionFiveAnswerA || questionFiveAnswerB ) {
  score += 1;
  alert("That is correct!");
} else {
  alert("That is incorrect!");
}

/*This is where the score is 
calculated and the user receives 
a rank.
*/
var rank = "You answered " + score + " correctly!";
  if (score === 5) {
    alert("You got 5 answers correct. You earned the gold crown!")
  } else if (score > 2) {
    alert("You got 3-4 answers correct. You earned the silver crown!")
  } else if (score > 0) {
    alert("You got 1-2 answers correct. You earned the bronze crown!")  
  } else {
    alert("You got 0 answers correct. You didn't earn a crown!")
  }


console.log(score);
