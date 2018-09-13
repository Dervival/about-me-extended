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
questionArray.push('Name one of my favorite foods');

//2-D array of answers - each index has an array of valid answers
// var answerArray = [];
// answerArray.push(['N', 'NO']);
// answerArray.push(['Y', 'YES']);
// answerArray.push(['Y', 'YES']);
// answerArray.push(['N', 'NO']);
// answerArray.push(['N', 'NO']);
//var randomNumber = [];
//randomNumber = Math.ceil(100*Math.random());
//console.log('Hidden number is ' + randomNumber);
//answerArray.push(randomNumber);
//answerArray.push();

// var incorrectAnswerArray = [];
// incorrectAnswerArray.push(['Y'],['YES']);
// incorrectAnswerArray.push(['N'],['NO']);
// incorrectAnswerArray.push(['N'],['NO']);
// incorrectAnswerArray.push(['Y'],['YES']);
// incorrectAnswerArray.push(['Y'],['YES']);

// var incorrectResponseArray = [];
// incorrectResponseArray.push('I\'m sorry, that\'s not correct. Unless my birth certificate is wrong, I\'m at least 25!');
// incorrectResponseArray.push('I\'m sorry, that\'s not correct. Unless my parents aren\'t being truthful, I only have one brother.');
// incorrectResponseArray.push('I\'m sorry, that\'s not correct. I did go to Oregon State University.');
// incorrectResponseArray.push('I\'m sorry, that\'s not correct. They should still be living in Portland.');
// incorrectResponseArray.push('I\'m sorry, that\'s not correct. Though I\'d like to have a dog, I don\'t have any pets at the moment.');

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
      if(userNumResponse === randomNumber){
        alert('Yes, ' + userNumResponse + ' is the number I was thinking of! That only took you ' + (guesses+1) + ' attempt(s)!');
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
    alert('fix this');
    break;
  default:
    console.log('Quiz escaped set of 7 questions!');
    break;
  }
}

// // Reconfigure this into a general function? correct answer is NO
// var ageResponse = '';
// while(ageResponse === '' || ageResponse === null){
//   ageResponse = prompt('Am I currently 24 years old?');
//   if(ageResponse === null){
//     console.log('User input resulted in null - likely hit close');
//     alert('I\'m sorry, I didn\'t quite understand that response. Can you try again?');
//   }
//   else{
//     ageResponse = ageResponse.toUpperCase();
//     if(ageResponse === 'Y' || ageResponse === 'YES'){
//       console.log('User incorrectly responded ' + ageResponse + '. Was expecting N or NO');
//       alert('I\'m sorry, that\'s not correct. Unless my birth certificate is wrong, I\'m at least 25!');
//       incorrectAnswers++;
//     }
//     else if(ageResponse === 'N' || ageResponse === 'NO'){
//       console.log('User correctly responded ' + ageResponse);
//       alert('That is correct!');
//       correctAnswers++;
//     }
//     else{
//       console.log('User provided input outside of expected [Y,N,YES,NO] - was ' + ageResponse);
//       alert('I\'m sorry, I didn\'t quite catch that. Can you respond with either yes, no, y, or n?');
//       ageResponse = '';
//     }
//   }
// }

// // Reconfigure this into a general function? correct answer is YES
// var brotherResponse = '';
// while(brotherResponse === '' || brotherResponse === null){
//   brotherResponse = prompt('Do I only have one brother?');
//   if(brotherResponse === null){
//     console.log('User input resulted in null - likely hit close');
//     alert('I\'m sorry, I didn\'t quite understand that response. Can you try again?');
//   }
//   else{
//     brotherResponse = brotherResponse.toUpperCase();
//     if(brotherResponse === 'N' || brotherResponse === 'NO'){
//       console.log('User incorrectly responded ' + brotherResponse + '. Was expecting Y or YES');
//       alert('I\'m sorry, that\'s not correct. Unless my parents aren\'t being truthful, I only have one brother.');
//       incorrectAnswers++;
//     }
//     else if(brotherResponse === 'Y' || brotherResponse === 'YES'){
//       console.log('User correctly responded ' + brotherResponse);
//       alert('That is correct!');
//       correctAnswers++;
//     }
//     else{
//       console.log('User provided input outside of expected [Y,N,YES,NO] - was ' + brotherResponse);
//       alert('I\'m sorry, I didn\'t quite catch that. Can you respond with either yes, no, y, or n?');
//       brotherResponse = '';
//     }
//   }
// }

// var collegeResponse = '';
// while(collegeResponse === '' || collegeResponse === null){
//   collegeResponse = prompt('Did I go to Oregon State University for college?');
//   if(collegeResponse === null){
//     console.log('User input resulted in null - likely hit close');
//     alert('I\'m sorry, I didn\'t quite understand that response. Can you try again?');
//   }
//   else{
//     collegeResponse = collegeResponse.toUpperCase();
//     if(collegeResponse === 'N' || collegeResponse === 'NO'){
//       console.log('User incorrectly responded ' + collegeResponse + '. Was expecting Y or YES');
//       alert('I\'m sorry, that\'s not correct. I did go to Oregon State University.');
//       incorrectAnswers++;
//     }
//     else if(collegeResponse === 'Y' || collegeResponse === 'YES'){
//       console.log('User correctly responded ' + collegeResponse);
//       alert('That is correct!');
//       correctAnswers++;
//     }
//     else{
//       console.log('User provided input outside of expected [Y,N,YES,NO] - was ' + collegeResponse);
//       alert('I\'m sorry, I didn\'t quite catch that. Can you respond with either yes, no, y, or n?');
//       collegeResponse = '';
//     }
//   }
// }

// var parentsResponse = '';
// while(parentsResponse === '' || parentsResponse === null){
//   parentsResponse = prompt('Are my parents living in Seattle as of September 11th, 2018?');
//   if(parentsResponse === null){
//     console.log('User input resulted in null - likely hit close');
//     alert('I\'m sorry, I didn\'t quite understand that response. Can you try again?');
//   }
//   else{
//     parentsResponse = parentsResponse.toUpperCase();
//     if(parentsResponse === 'Y' || parentsResponse === 'YES'){
//       console.log('User incorrectly responded ' + parentsResponse + '. Was expecting N or NO');
//       alert('I\'m sorry, that\'s not correct. They should still be living in Portland.');
//       incorrectAnswers++;
//     }
//     else if(parentsResponse === 'N' || parentsResponse === 'NO'){
//       console.log('User correctly responded ' + parentsResponse);
//       alert('That is correct!');
//       correctAnswers++;
//     }
//     else{
//       console.log('User provided input outside of expected [Y,N,YES,NO] - was ' + parentsResponse);
//       alert('I\'m sorry, I didn\'t quite catch that. Can you respond with either yes, no, y, or n?');
//       parentsResponse = '';
//     }
//   }
// }

// var petsResponse = '';
// while(petsResponse === '' || petsResponse === null){
//   petsResponse = prompt('Do I currently have a dog?');
//   if(petsResponse === null){
//     console.log('User input resulted in null - likely hit close');
//     alert('I\'m sorry, I didn\'t quite understand that response. Can you try again?');
//   }
//   else{
//     petsResponse = petsResponse.toUpperCase();
//     if(petsResponse === 'Y' || petsResponse === 'YES'){
//       console.log('User incorrectly responded ' + petsResponse + '. Was expecting N or NO');
//       alert('I\'m sorry, that\'s not correct. Though I\'d like to have a dog, I don\'t have any pets at the moment.');
//       incorrectAnswers++;
//     }
//     else if(petsResponse === 'N' || petsResponse === 'NO'){
//       console.log('User correctly responded ' + petsResponse);
//       alert('That is correct!');
//       correctAnswers++;
//     }
//     else{
//       console.log('User provided input outside of expected [Y,N,YES,NO] - was ' + petsResponse);
//       alert('I\'m sorry, I didn\'t quite catch that. Can you respond with either yes, no, y, or n?');
//       petsResponse = '';
//     }
//   }
// }

// /*var seattleResponse = '';
// while(seattleResponse === '' || seattleResponse === null){
//   seattleResponse = prompt('Did I move to Seattle in 2016?');
//   if(seattleResponse === null){
//     console.log('User input resulted in null - likely hit close');
//     alert('I\'m sorry, I didn\'t quite understand that response. Can you try again?');
//   }
//   else{
//     seattleResponse = seattleResponse.toUpperCase();
//     if(seattleResponse === 'N' || seattleResponse === 'NO'){
//       console.log('User incorrectly responded ' + seattleResponse + '. Was expecting Y or YES');
//       alert('I\'m sorry, that\'s not correct. I did move to Seattle in 2016.');
//       incorrectAnswers++;
//     }
//     else if(seattleResponse === 'Y' || seattleResponse === 'YES'){
//       console.log('User correctly responded ' + seattleResponse);
//       alert('That is correct!');
//       correctAnswers++;
//     }
//     else{
//       console.log('User provided input outside of expected [Y,N,YES,NO] - was ' + seattleResponse);
//       alert('I\'m sorry, I didn\'t quite catch that. Can you respond with either yes, no, y, or n?');
//       seattleResponse = '';
//     }
//   }
// }*/

// Give slightly different messages based on if they answered at least half of the questions correctly.
if(correctAnswers >= incorrectAnswers){
  alert('Congratulations, ' + username +'! You got ' + correctAnswers + ' out of ' + (correctAnswers+incorrectAnswers) + ' questions right!');
}
else{
  alert('Oof, you only got ' + correctAnswers + ' out of ' + (correctAnswers+incorrectAnswers) + ' questions right. Better luck next time, ' + username + '.');
}
