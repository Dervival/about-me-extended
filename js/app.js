'use strict';

//Getting a username - if the user hits enter without typing anything, it's an empty string;
// if they hit cancel, it's a null value. Repeat this cycle until there's valid input.
var uname = '';
function getUserName(){
  let username = '';
  while(username === '' || username === null){
    username = prompt('Hello there! Please tell me your name.');
    if(username === ''){
      console.log('User failed to enter a name');
      alert('I must insist you enter something for your name.');
    }
    else if(username === null){
      console.log('User attempted to exit the username prompt');
      alert('Please don\'t exit this prompt. I would like to know your name!');
    }
    else{
      console.log('User successfully entered a name - ' + username);
      alert('Nice to meet you, ' + username + '! Let\'s take a quick quiz about me!');
    }
  }
  return username;
}
uname = getUserName();

// Trying to avoid hard-coding the number of questions this quiz asks...
var correctAnswers = 0;
var incorrectAnswers = 0;

var questionArray = [];
questionArray.push('Am I currently 24 years old?');
questionArray.push('Do I only have one brother?');
questionArray.push('Did I go to Oregon State University for college?');
questionArray.push('Are my parents living in Seattle as of September 11th, 2018?');
questionArray.push('Do I currently have a dog?');
questionArray.push('I\'m thinking of a number between 1 and 100, inclusive. Guess it!');
questionArray.push('Name one of my favorite foods.');

var answerArray = [];
answerArray.push('N');
answerArray.push('Y');
answerArray.push('Y');
answerArray.push('N');
answerArray.push('N');
var randomNumber = Math.ceil(100*Math.random());
console.log('Hidden number is ' + randomNumber);
answerArray.push(randomNumber);

var foodsArray = [];
foodsArray.push('hamburger');
foodsArray.push('hamburgers');
foodsArray.push('hamburgers!');
foodsArray.push('sushi!');
foodsArray.push('sushi');
foodsArray.push('steak');
foodsArray.push('steak!');

var validFoodAnswers = '';
for(var i = 0; i < (foodsArray.length-1); i++){
  validFoodAnswers = validFoodAnswers + '"' + foodsArray[i] + '", ';
}
validFoodAnswers = validFoodAnswers + 'or "' + foodsArray[6] + '"';

answerArray.push(foodsArray);

//refactoring askQuestions to split it into 3 different functions - one for running Yes/No questions, one for asking about the random number, one for asking about my favorite foods.
function askYesNo(question,validAnswer,respCorrect,respIncorrect){
  var isCorrect = false;
  var validAnswerArray = [];
  validAnswerArray = fillYNArray(validAnswer);
  console.log('Question asked was: ' + question);
  var userResponse = prompt(question);
  if (!userResponse){
    userResponse = '';
  }
  userResponse = userResponse.toUpperCase();
  for(var i = 0; i < validAnswerArray.length; i++){
    console.log('Checking user answer ' + userResponse + ' against valid answer ' + validAnswerArray[i]);
    if(userResponse === validAnswerArray[i]){
      alert(respCorrect);
      isCorrect = true;
      return isCorrect;
    }
  }
  alert(respIncorrect);
  return isCorrect;
}
for(var qNum = 0; qNum < 5; qNum++){
  if(askYesNo(questionArray[qNum],answerArray[qNum], 'correct', 'incorrect') ){
    correctAnswers++;
  }
  else{
    incorrectAnswers++;
  }
}
//console.log(correctAnswers + ' correct, ' + incorrectAnswers + ' incorrect.');

function fillYNArray(yesOrNoString){
  let returnArray = [];
  switch(yesOrNoString){
  case 'Y':
    returnArray.push('Y');
    returnArray.push('YES');
    return returnArray;
  case 'N':
    returnArray.push('N');
    returnArray.push('NO');
    return returnArray;
  default:
    console.log('fillYNArray only handles Y or N fills, tried to fill with ' + yesOrNoString);
    return returnArray;
  }
}

function askRandNum(question,validAnswer){
  var guesses = 0;
  var maxGuesses = 4;
  var userNumResponse = '';
  while( guesses <= maxGuesses){
    guesses++;
    while(userNumResponse === ''){
      userNumResponse = prompt(question);
      console.log('Input was ' + userNumResponse);
      if(parseInt(userNumResponse)){ //should run when given a parseable number string
        console.log('Input could be parsed as an int');
        userNumResponse = parseInt(userNumResponse, 10);
      }
      else{
        console.log('Input could not be parsed');
        userNumResponse = '';
      }
    }
    console.log('Comparing guess #' + guesses + ' ' + userNumResponse + ' to ' + validAnswer);
    if(userNumResponse === validAnswer){
      console.log('Correct answer entered');
      alert('Yes! ' + validAnswer + ' was the number I was thinking of.');
      return true;
    }
    else if( userNumResponse > validAnswer && guesses < maxGuesses){
      console.log('Answer too high - ' + userNumResponse + ' > ' + validAnswer);
      alert('That number is too high. Try again.');
      userNumResponse = '';
    }
    else if( userNumResponse < validAnswer && guesses < maxGuesses){
      console.log('Answer too low - ' + userNumResponse + ' < ' + validAnswer);
      alert('That number is too low. Try again.');
      userNumResponse = '';
    }
    else{
      console.log('Incorrect answer and out of guesses');
      alert('That number is incorrect, and you are out of guesses. My number was ' + validAnswer);
      return false;
    }
  }
}

if(askRandNum(questionArray[5],answerArray[5])){
  correctAnswers++;
}
else{
  incorrectAnswers++;
}
// function askQuestions(){
//   var userResponse = '';
//   for(var questionNumber = 0; questionNumber < questionArray.length; questionNumber++){
//     console.log('Asking question #' + (questionNumber+1) + ': ' + questionArray[questionNumber]);
//     switch(questionNumber){

//     case 5:
//       var userNumResponse = -1;
//       var randomNumber = Math.ceil(100*Math.random());
//       console.log('Hidden number is ' + randomNumber);
//       var guesses = 1;
//       var maxGuesses = 4;
//       while(guesses <= maxGuesses){
//         userNumResponse = prompt(questionArray[questionNumber]);
//         userNumResponse = parseInt(userNumResponse, 10);
//         if(userNumResponse === randomNumber){
//           alert('Yes, ' + userNumResponse + ' is the number I was thinking of! That only took you ' + (guesses) + ' attempt(s)!');
//           correctAnswers++;
//           guesses = maxGuesses;
//           break;
//         }
//         else{
//           if(guesses < maxGuesses && userNumResponse < randomNumber){
//             alert('That number is too low. Try again.');
//           }
//           else if(guesses === maxGuesses && userNumResponse < randomNumber){
//             alert('That number is too low. Sorry, that\'s all your guesses.');
//             incorrectAnswers++;
//           }
//           else if(guesses < maxGuesses && userNumResponse > randomNumber){
//             alert('That number is too high. Try again.');
//           }
//           else if(guesses === maxGuesses && userNumResponse > randomNumber){
//             alert('That number is too high. Sorry, that\'s all your guesses.');
//             incorrectAnswers++;
//           }
//         }
//         guesses++;
//       }
//       break;
//     case 6:
//       console.log('Asking about favorite food');
//       //probably shouldn't rename the guesses variable for maintainability's sake...
//       guesses = 0;
//       maxGuesses = 6;
//       var userFoodResponse = '';
//       while(guesses < maxGuesses){
//         userFoodResponse = prompt('Guess one of my top three favorite foods!');
//         if(userFoodResponse === null){
//           userFoodResponse = '';
//         }
//         userFoodResponse = userFoodResponse.toLowerCase();
//         for(i = 0; i < foodsArray.length; i++){
//           if(userFoodResponse === foodsArray[i]){
//             alert('That\'s correct! You picked one of my favorite foods out of the valid set of ' + validFoodAnswers + '.');
//             correctAnswers++;
//             i = foodsArray.length;
//             guesses = maxGuesses;
//           }
//         }
//         if(guesses < maxGuesses){
//           alert('That is not one of my top three foods. Try again.');
//         }
//         guesses++;
//         if(guesses === maxGuesses){
//           alert('Actually, you\'re out of guesses, sorry. A valid choice would be any of ' + validFoodAnswers + '.');
//           incorrectAnswers++;
//         }
//       }
//       break;
//     default:
//       console.log('Quiz escaped set of 7 questions!');
//       break;
//     }
//   }
// }
// askQuestions();

// Give slightly different messages based on if they answered at least half of the questions correctly.
function congratsUser(){
  if(correctAnswers >= incorrectAnswers){
    alert('Congratulations, ' + uname +'! You got ' + correctAnswers + ' out of ' + (correctAnswers+incorrectAnswers) + ' questions right!');
  }
  else{
    alert('Oof, you only got ' + correctAnswers + ' out of ' + (correctAnswers+incorrectAnswers) + ' questions right. Better luck next time, ' + uname + '.');
  }
}
congratsUser();
