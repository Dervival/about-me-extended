'use strict';

//Getting a username - if the user hits enter without typing anything, it's an empty string;
// if they hit cancel, it's a null value. Repeat this cycle until there's valid input.
var username = '';
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

var foodsArray = [];
foodsArray.push('hamburger');
foodsArray.push('hamburgers');
foodsArray.push('hamburgers!');
foodsArray.push('sushi!');
foodsArray.push('sushi');
foodsArray.push('steak');
foodsArray.push('steak!');
var validFoodAnswers = '"';
for(var i = 0; i < (foodsArray.length-1); i++){
  validFoodAnswers = validFoodAnswers + foodsArray[i] + '", "';
}
validFoodAnswers = validFoodAnswers + 'or ' + foodsArray[6] + '"';

var userResponse = '';
for(var questionNumber = 0; questionNumber < questionArray.length; questionNumber++){
  console.log('Asking question #' + (questionNumber+1) + ': ' + questionArray[questionNumber]);
  switch(questionNumber){
  case 0:
    userResponse = prompt(questionArray[questionNumber]);
    if(userResponse === null){
      userResponse = '';
    }
    userResponse = userResponse.toUpperCase();
    if(userResponse === 'NO' || userResponse === 'N'){
      correctAnswers++;
      alert('That is correct!');
    }
    else{
      incorrectAnswers++;
      alert('That is not correct, sorry.');
    }
    break;
  case 1:
    userResponse = prompt(questionArray[questionNumber]);
    if(userResponse === null){
      userResponse = '';
    }
    userResponse = userResponse.toUpperCase();
    if(userResponse === 'Y' || userResponse === 'YES'){
      correctAnswers++;
      alert('That is correct!');
    }
    else{
      incorrectAnswers++;
      alert('That is not correct, sorry.');
    }
    break;
  case 2:
    userResponse = prompt(questionArray[questionNumber]);
    if(userResponse === null){
      userResponse = '';
    }
    userResponse = userResponse.toUpperCase();
    if(userResponse === 'Y' || userResponse === 'YES'){
      correctAnswers++;
      alert('That is correct!');
    }
    else{
      incorrectAnswers++;
      alert('That is not correct, sorry.');
    }
    break;
  case 3:
    userResponse = prompt(questionArray[questionNumber]);
    if(userResponse === null){
      userResponse = '';
    }
    userResponse = userResponse.toUpperCase();
    if(userResponse === 'NO' || userResponse === 'N'){
      correctAnswers++;
      alert('That is correct!');
    }
    else{
      incorrectAnswers++;
      alert('That is not correct, sorry.');
    }
    break;
  case 4:
    userResponse = prompt(questionArray[questionNumber]);
    if(userResponse === null){
      userResponse = '';
    }
    userResponse = userResponse.toUpperCase();
    if(userResponse === 'NO' || userResponse === 'N'){
      correctAnswers++;
      alert('That is correct!');
    }
    else{
      incorrectAnswers++;
      alert('That is not correct, sorry.');
    }
    break;
  case 5:
    var userNumResponse = -1;
    var randomNumber = Math.ceil(100*Math.random());
    console.log('Hidden number is ' + randomNumber);
    var guesses = 1;
    var maxGuesses = 4;
    while(guesses <= maxGuesses){
      userNumResponse = prompt(questionArray[questionNumber]);
      userNumResponse = parseInt(userNumResponse, 10);
      if(userNumResponse === randomNumber){
        alert('Yes, ' + userNumResponse + ' is the number I was thinking of! That only took you ' + (guesses) + ' attempt(s)!');
        correctAnswers++;
        guesses = maxGuesses;
        break;
      }
      else{
        if(guesses < maxGuesses && userNumResponse < randomNumber){
          alert('That number is too low. Try again.');
        }
        else if(guesses === maxGuesses && userNumResponse < randomNumber){
          alert('That number is too low. Sorry, that\'s all your guesses.');
          incorrectAnswers++;
        }
        else if(guesses < maxGuesses && userNumResponse > randomNumber){
          alert('That number is too high. Try again.');
        }
        else if(guesses === maxGuesses && userNumResponse > randomNumber){
          alert('That number is too high. Sorry, that\'s all your guesses.');
          incorrectAnswers++;
        }
      }
      guesses++;
    }
    break;
  case 6:
    console.log('Asking about favorite food');
    //probably shouldn't rename the guesses variable for maintainability's sake...
    guesses = 0;
    maxGuesses = 6;
    var userFoodResponse = '';
    while(guesses < maxGuesses){
      userFoodResponse = prompt('Guess one of my top three favorite foods!');
      if(userFoodResponse === null){
        userFoodResponse = '';
      }
      userFoodResponse = userFoodResponse.toLowerCase();
      for(i = 0; i < foodsArray.length; i++){
        if(userFoodResponse === foodsArray[i]){
          alert('That\'s correct! You picked one of my favorite foods out of the valid set of ' + validFoodAnswers + '.');
          correctAnswers++;
          i = foodsArray.length;
          guesses = maxGuesses;
        }
      }
      if(guesses < maxGuesses){
        alert('That is not one of my top three foods. Try again.');
      }
      guesses++;
      if(guesses === maxGuesses){
        alert('Actually, you\'re out of guesses, sorry. A valid choice would be any of ' + validFoodAnswers + '.');
        incorrectAnswers++;
      }
    }
    break;
  default:
    console.log('Quiz escaped set of 7 questions!');
    break;
  }
}

// Give slightly different messages based on if they answered at least half of the questions correctly.
if(correctAnswers >= incorrectAnswers){
  alert('Congratulations, ' + username +'! You got ' + correctAnswers + ' out of ' + (correctAnswers+incorrectAnswers) + ' questions right!');
}
else{
  alert('Oof, you only got ' + correctAnswers + ' out of ' + (correctAnswers+incorrectAnswers) + ' questions right. Better luck next time, ' + username + '.');
}
