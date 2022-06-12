//below i made my first variable for userName and put a empty string for user to fill
var userName = 'Hassan'
//this code below decide what happens when user enters name above or not
userName ? console.log(`Hello ${userName} !`) : console.log('Hello !');
//below is my second variable userQuestion where it's also empty for user to fill
var userQuestion = 'What is my chances'
//below will print users name and followed by the question they fill in userQuestion
console.log(`${userName}: ${userQuestion}?`);
//used the math operators below to pick a random number between 0-7
var randomNumber = Math.floor(Math.random() * 8);
//below i assigned variable eightBall to empty string
var eightBall = ''
//below is my control flow where i assigned each number to a string of text
if (randomNumber ==0){
  eightBall = 'It is certain';
} 
else if (randomNumber ==1){
  eightBall = 'It is decidedly so';
} 
else if (randomNumber ==2){
  eightBall = 'Reply hazy try again';
} 
else if(randomNumber ==3){
  eightBall = 'Cannot Predict Now';
}
else if (randomNumber ==4){
  eightBall = 'Do no count on it';
}
else if (randomNumber ==5){
  eightBall = 'My sources say no';
}
else if (randomNumber ==6){
  eightBall = 'Outlook not so good';
}
else if (randomNumber ==7){
  eightBall = 'Signs point to yes';
}  
//below will print out the final random number and the eightBall phrases
console.log(eightBall);
console.log(randomNumber);