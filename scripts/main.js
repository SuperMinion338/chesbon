"use strict";

alert("ברוכ/ה הבא/ה לאתר ! 📌\n בישביל להמשיך לחצ/י על הכפתור הכחול 🔹")

let result, result2, result3, result4, result5;
let goodAnswers = 0 , wrongAnswers = 0 ;
 

// Change this function to be a generic one that recieves a param for the grade
function generateRandomCalculation() {
  let num1 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  let num2 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  let num3 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  let num4 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  let num5 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  let num6 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  let num7 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  let num8 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  let num9 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  let num10 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  if (num2 > num1) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }
  if (num4 > num3) {
    let temp = num3;
    num3 = num4;
    num4 = temp;
  }
  if (num6 > num5) {
    let temp = num5;
    num5 = num6;
    num6 = temp;
  }
  if (num8 > num7) {
    let temp = num7;
    num7 = num8;
    num8 = temp;
  }
  if (num10 > num9) {
    let temp = num9;
    num9 = num10;
    num10 = temp;
  }
  let operator = Math.random() < 0.5 ? '+' : '-'; // Randomly choose between addition or subtraction
  let operator2 = Math.random() < 0.5 ? '+' : '-'; // Randomly choose between addition or subtraction
  let operator3 = Math.random() < 0.5 ? '+' : '-'; // Randomly choose between addition or subtraction
  let operator4 = Math.random() < 0.5 ? '+' : '-'; // Randomly choose between addition or subtraction
  let operator5 = Math.random() < 0.5 ? '+' : '-'; // Randomly choose between addition or subtraction
  if (operator === '+') {
    result = num1 +  num2;
  } else {
    result = num1 - num2;
  }

  if (operator2 === '+') {
    result2 = num3 + num4;
  } else {
    result2 = num3 - num4;
  }
  if (operator3 === '+') {
    result3 = num5 +  num6;
  } else {
    result3 = num5 - num6;
  }

  if (operator4 === '+') {
    result4 = num7 + num8;
  } else {
    result4 = num7 - num8;
  }

  if (operator5 === '+') {
    result5 = num9 + num10;
  } else {
    result5 = num9 - num10;
  }
  let calculation = num1 + ' ' + operator + ' ' + num2 + ' =' ;
  let calculation2 = num3 + ' ' + operator2 + ' ' + num4 + ' =' ;
  let calculation3 = num5 + ' ' + operator3 + ' ' + num6 + ' =' ;
  let calculation4 = num7 + ' ' + operator4 + ' ' + num8 + ' =' ;
  let calculation5 = num9 + ' ' + operator5 + ' ' + num10 + ' =' ;
  document.getElementById('calculation').textContent = calculation;
  document.getElementById('calculation2').textContent = calculation2;
  document.getElementById('calculation3').textContent = calculation3;
  document.getElementById('calculation4').textContent = calculation4;
  document.getElementById('calculation5').textContent = calculation5;
}
function checkResult() {
    let inputVal = document.getElementById("myInput1").value;
    let inputVal2 = document.getElementById("myInput2").value;
    let inputVal3 = document.getElementById("myInput3").value;
    let inputVal4 = document.getElementById("myInput4").value;
    let inputVal5 = document.getElementById("myInput5").value;
    if (result == inputVal) {
        goodAnswers++;
    }
    else { 
         wrongAnswers++;
    }
    if (result2 == inputVal2) {
        goodAnswers++;
    }
    else { 
         wrongAnswers++;
    }   
    if (result3 == inputVal3) {
        goodAnswers++;
    }
    else { 
         wrongAnswers++;
    }
    if (result4 == inputVal4) {
        goodAnswers++;
    }
    else { 
         wrongAnswers++;
    }
    if (result5 == inputVal5) {
        goodAnswers++;
    }
    else { 
         wrongAnswers++;
    }
    alert ('התשובות הנכונות שלך: ✅ '+ goodAnswers   +'\nהטעויות שלך: ⛔' + wrongAnswers + '\nבישביל להמשיך לחצ/י על אישור' + '🔷'  );

}
  
    