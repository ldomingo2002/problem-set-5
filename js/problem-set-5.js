/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be Integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE HERE

var p = document.getElementById('mario-easy-output');
while (height < 1 || height > 23 || Number.isInteger(height) === false){
  height = Number(prompt("Enter a height between 1 and 23"));
}

let total;
let h;
let i;
let j;
let row = "";

for (h = 0; h < height; h++){
  row = row + "#"}

for (let i =0; i <(height-h-1); i++){
    row = row +"&nbsp;";
  }

  for (let j = 0; j < (h + 1); j++){
    row = row + "#";
  }


  total = total + row + "<br/>";

p.innerHTML = "<code>" + total + "</code>";

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE
  var p = document.getElementById('mario-easy-output');
  while (height < 1 || height > 23 || Number.isInteger(height) === false){
  height = Number(prompt("Enter a height between 1 and 23"));


  let rows = "";
  let h;
  let i;
  let j;
  let k;

  for (let h = 0; h < height; h++){
      row = "";

  for (let i = 0; i < (height-h-1); i++){
        row = row + "&nbsp;";
      }

      row = row + "#";

      for (let j = 0; j < ( h + 1 ); j++){
        row = row + "#";
      }

      row = row + `&nbsp;&nbsp;#`;
      for (let k = 0; k < (h + 1); k++){
        row = row + "#";
      }

total = total + row + "<br/>";
p.innerHTML = "<code>" + total + "</code>";

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE

  var p = document.getElementById("credit-output");

while (true){
       card = prompt("Enter your Credit Card Number: ");
     if (card.length==13 || card.length==15 || card.length ==16 && Number.isInteger(Number(card)))
     break;}

     let totalOdd;
    let totalEven;

     for( let i = card.length-2; i >= 0; i -= 2) {
       let num = Number(card[i])*2;
       let othnum = num.toString();
       let sum = 0;
       for (let j = 0; j < othnum.length; j++){
         sum = sum +Number(othnum[j]);
       }
       totalEven = sum + totalEven;
       console.log(totalEven);
     }
     for(let k = card.length-1; k >= 0;k -= 2){
       totalOdd = totalOdd+Number(card[k])
     }
     console.log(totalOdd);

     if (card.length==15 && (card[0]==3 &&(card[1]==7 || card[1]==4)) && (totalOdd + totalEven)%10==0){
       div.innerHTML="<img src ='./images/amex.png'/>";
     } else if ((card.length==13 || card.length==16) && card[0]==4 && (totalOdd + totalEven)%10==0){
     div.innerHTML="<img src ='./images/visa.png'/>";
   } else if (card.length==16 && (card[0]==5 && (card[1]==1 || card[1]==2 || card[1]==4 || card[1]==5)) && (totalOdd + totalEven)%10==0){
       div.innerHTML="<img src ='./images/mastercard.png'/>";
     } else {
   div.innerHTML="<img src='./images/invalid.png'/>";
 }
     card = Number(card);

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  // WRITE YOUR EXERCISE 4 CODE HERE

var p = document.getElementById('guess-output');

let random = Math.random(Math.random() * 1001) + 1;

let guesses;
let input;

while (input < 1 || input > 1000 || Number.isInteger(input) === false){
  input = prompt('Guess which random number has been chosen!')
  break
}

if (input = random){
  p.innerHTML = `Congrats, you found the random number and it only took you ${guesses} guesses!`
}

do {
guesses++
} while (input != random )

if (input > random){
  p.innerHTML = "You guessed higher than the random number";
} else if (input < random){
  p.innerHTML = "You guessed lower than the random number";
}

do {
guesses++
} while (input != random )


  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY

var p = document.getElementById("hurricane-output");

while (windspeed < 0 || Number.isInteger === false){
  windspeed = prompt('Enter a windspeed');
break}

if (windspeed >= 39 && windspeed <= 73){
  p.innerHTML = "Tropical Storm";
} else if (windspeed >= 74 && windspeed <= 95){
  p.innerHTML = "Category 1";
} else if (windspeed >= 96 && windspeed <= 110){
  p.innerHTML = "Category 2";
} else if (windspeed >= 111 && windspeed <= 129){
  p.innerHTML = "Category 3";
} else if (windspeed >= 130 && windspeed <= 156){
  p.innerHTML = "Category 4";
} else if (windspeed >= 157){
  p.innerHTML = "Category 5";
}

///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  var p = document.getElementById("gymnastics-output");
let sOne;
let sTwo;
let sThree;
let sFour;
let sFive;
let sSix;

do {
  sOne = prompt('Please enter the first score');
}while(sOne < 0 || sOne > 10 || Number.isInteger(sOne) === false);

if (sOne >= 0.0 && sOne <= 10.0){
    scores.push(sOne);
  } else {
    alert('Please enter a valid score');
  }

do {
  sTwo = prompt('Enter the second score');
} while (sTwo < 0 || sTwo > 10 || Number.isInteger(sTwo) === false);

if (sTwo >= 0.0 && sTwo <= 10.0){
  scores.push(sTwo);
} else {
  alert('Please enter a valid score');
}

do {
  sThree = prompt('Enter the third score');
} while (sThree < 0 || sThree > 10 || Number.isInteger(sThree) === false);

if (sThree >= 0.0 && sThree <= 10.0){
  scores.push(sThree);
} else {
  alert('Please enter a valid score');
}

do {
  sFour = prompt('Enter the fourth score');
} while (sFour < 0 || sFour > 10 || Number.isInteger(sFour) === false);

if (sFour >= 0.0 && sFour <= 10.0){
  scores.push(sFour);
} else {
  alert('Please enter a valid score');
}

do {
  sFive = prompt('Enter the fifth score');
} while (sFive < 0 || sFive > 10 || Number.isInteger(sFive) === false);

  if (sFive >= 0.0 && sFive <= 10.0){
    scores.push(sFive);
  } else {
      alert('Please enter a valid score');
  }

do {
  sSix = prompt('Enter the sixth score');
}while(sSix < 0 || sSix > 10 || Number.isInteger(sSix) === false);

  if (sSix >= 0.0 && sSix <= 10.0){
  scores.push(sSix);
  } else {
    alert('Please enter a valid score');
  }

let maximum = Math.max(sOne, sTwo, sThree, sFour, sFive, sSix);
let minimum = Math.min(sOne, sTwo, sThree, sFour, sFive, sSix);

total = (sOne + sTwo + sThree + sFour + sFive + sSix)
finalScore = ((total - maximum) - minimum);
p.innerHTML = `Score: ${finalScore}`;

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

   let p = document.getElementById("report-card-output");

let testgrades;

   while (testGrades < 0 || testGrades > 100 || testgrades !== -1){
     testGrades = prompt('Enter as many test grades as you want; remember to type -1 when you are done.');
     tests = Number(testgrades);
   }
    testTotal += testGrades;
    let avg1 = testTotal / tests;

    let quizGrades;
      while (quizGrades < 0 || quizGrades > 100 || quizGgrades !== -1){
        quizGrades = prompt("Enter as many quiz grades as you want; remember to type -1 when you are done.");
      quizzes = Number(quizGrades);
      }
      quizTotal += quizGrades;
      let avg2 = quizTotal / quizzes;

      let homeworkGrades;
      while (homeworkGrades < 0 || homeworkGrades > 100 || homeworkGrades !== -1){
        homeworkGrades= prompt("Enter as many homework grades as you want; remmember to type -1 when you are done.");
        homeworks = Number(homeworkGrades);
      }
      homeworkTotal += homeworkGrades;
      let avg3 = homeworkTotal / homeworks;

      finalGrade = (avg1 * 0.6) + (avg2 * 0.3) + (avg3 * 0.1);

p.innerHTML = `Final grade: ${finalGrade}`;
  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
   );//////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
