//9-12-2018: I'm an idiot and forgot the use strict requirement >.<
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

// Reconfigure this into a general function? correct answer is NO
var ageResponse = '';
while(ageResponse === '' || ageResponse === null){
  ageResponse = prompt('Am I currently 24 years old?');
  if(ageResponse === null){
    console.log('User input resulted in null - likely hit close');
    alert('I\'m sorry, I didn\'t quite understand that response. Can you try again?');
  }
  else{
    ageResponse = ageResponse.toUpperCase();
    if(ageResponse === 'Y' || ageResponse === 'YES'){
      console.log('User incorrectly responded ' + ageResponse + '. Was expecting N or NO');
      alert('I\'m sorry, that\'s not correct. Unless my birth certificate is wrong, I\'m at least 25!');
      incorrectAnswers++;
    }
    else if(ageResponse === 'N' || ageResponse === 'NO'){
      console.log('User correctly responded ' + ageResponse);
      alert('That is correct!');
      correctAnswers++;
    }
    else{
      console.log('User provided input outside of expected [Y,N,YES,NO] - was ' + ageResponse);
      alert('I\'m sorry, I didn\'t quite catch that. Can you respond with either yes, no, y, or n?');
      ageResponse = '';
    }
  }
}

// Reconfigure this into a general function? correct answer is YES
var brotherResponse = '';
while(brotherResponse === '' || brotherResponse === null){
  brotherResponse = prompt('Do I only have one brother?');
  if(brotherResponse === null){
    console.log('User input resulted in null - likely hit close');
    alert('I\'m sorry, I didn\'t quite understand that response. Can you try again?');
  }
  else{
    brotherResponse = brotherResponse.toUpperCase();
    if(brotherResponse === 'N' || brotherResponse === 'NO'){
      console.log('User incorrectly responded ' + brotherResponse + '. Was expecting Y or YES');
      alert('I\'m sorry, that\'s not correct. Unless my parents aren\'t being truthful, I only have one brother.');
      incorrectAnswers++;
    }
    else if(brotherResponse === 'Y' || brotherResponse === 'YES'){
      console.log('User correctly responded ' + brotherResponse);
      alert('That is correct!');
      correctAnswers++;
    }
    else{
      console.log('User provided input outside of expected [Y,N,YES,NO] - was ' + brotherResponse);
      alert('I\'m sorry, I didn\'t quite catch that. Can you respond with either yes, no, y, or n?');
      brotherResponse = '';
    }
  }
}

var collegeResponse = '';
while(collegeResponse === '' || collegeResponse === null){
  collegeResponse = prompt('Did I go to Oregon State University for college?');
  if(collegeResponse === null){
    console.log('User input resulted in null - likely hit close');
    alert('I\'m sorry, I didn\'t quite understand that response. Can you try again?');
  }
  else{
    collegeResponse = collegeResponse.toUpperCase();
    if(collegeResponse === 'N' || collegeResponse === 'NO'){
      console.log('User incorrectly responded ' + collegeResponse + '. Was expecting Y or YES');
      alert('I\'m sorry, that\'s not correct. I did go to Oregon State University.');
      incorrectAnswers++;
    }
    else if(collegeResponse === 'Y' || collegeResponse === 'YES'){
      console.log('User correctly responded ' + collegeResponse);
      alert('That is correct!');
      correctAnswers++;
    }
    else{
      console.log('User provided input outside of expected [Y,N,YES,NO] - was ' + collegeResponse);
      alert('I\'m sorry, I didn\'t quite catch that. Can you respond with either yes, no, y, or n?');
      collegeResponse = '';
    }
  }
}

var parentsResponse = '';
while(parentsResponse === '' || parentsResponse === null){
  parentsResponse = prompt('Are my parents living in Seattle as of September 11th, 2018?');
  if(parentsResponse === null){
    console.log('User input resulted in null - likely hit close');
    alert('I\'m sorry, I didn\'t quite understand that response. Can you try again?');
  }
  else{
    parentsResponse = parentsResponse.toUpperCase();
    if(parentsResponse === 'Y' || parentsResponse === 'YES'){
      console.log('User incorrectly responded ' + parentsResponse + '. Was expecting N or NO');
      alert('I\'m sorry, that\'s not correct. They should still be living in Portland.');
      incorrectAnswers++;
    }
    else if(parentsResponse === 'N' || parentsResponse === 'NO'){
      console.log('User correctly responded ' + parentsResponse);
      alert('That is correct!');
      correctAnswers++;
    }
    else{
      console.log('User provided input outside of expected [Y,N,YES,NO] - was ' + parentsResponse);
      alert('I\'m sorry, I didn\'t quite catch that. Can you respond with either yes, no, y, or n?');
      parentsResponse = '';
    }
  }
}

var petsResponse = '';
while(petsResponse === '' || petsResponse === null){
  petsResponse = prompt('Do I currently have a dog?');
  if(petsResponse === null){
    console.log('User input resulted in null - likely hit close');
    alert('I\'m sorry, I didn\'t quite understand that response. Can you try again?');
  }
  else{
    petsResponse = petsResponse.toUpperCase();
    if(petsResponse === 'Y' || petsResponse === 'YES'){
      console.log('User incorrectly responded ' + petsResponse + '. Was expecting N or NO');
      alert('I\'m sorry, that\'s not correct. Though I\'d like to have a dog, I don\'t have any pets at the moment.');
      incorrectAnswers++;
    }
    else if(petsResponse === 'N' || petsResponse === 'NO'){
      console.log('User correctly responded ' + petsResponse);
      alert('That is correct!');
      correctAnswers++;
    }
    else{
      console.log('User provided input outside of expected [Y,N,YES,NO] - was ' + petsResponse);
      alert('I\'m sorry, I didn\'t quite catch that. Can you respond with either yes, no, y, or n?');
      petsResponse = '';
    }
  }
}

var seattleResponse = '';
while(seattleResponse === '' || seattleResponse === null){
  seattleResponse = prompt('Did I move to Seattle in 2016?');
  if(seattleResponse === null){
    console.log('User input resulted in null - likely hit close');
    alert('I\'m sorry, I didn\'t quite understand that response. Can you try again?');
  }
  else{
    seattleResponse = seattleResponse.toUpperCase();
    if(seattleResponse === 'N' || seattleResponse === 'NO'){
      console.log('User incorrectly responded ' + seattleResponse + '. Was expecting Y or YES');
      alert('I\'m sorry, that\'s not correct. I did move to Seattle in 2016.');
      incorrectAnswers++;
    }
    else if(seattleResponse === 'Y' || seattleResponse === 'YES'){
      console.log('User correctly responded ' + seattleResponse);
      alert('That is correct!');
      correctAnswers++;
    }
    else{
      console.log('User provided input outside of expected [Y,N,YES,NO] - was ' + seattleResponse);
      alert('I\'m sorry, I didn\'t quite catch that. Can you respond with either yes, no, y, or n?');
      seattleResponse = '';
    }
  }
}

// Give slightly different messages based on if they answered at least half of the questions correctly.
if(correctAnswers >= incorrectAnswers){
  alert('Congratulations! You got ' + correctAnswers + ' out of ' + (correctAnswers+incorrectAnswers) + ' questions right!');
}
else{
  alert('Oof, you only got ' + correctAnswers + ' out of ' + (correctAnswers+incorrectAnswers) + ' questions right. Better luck next time.');
}
