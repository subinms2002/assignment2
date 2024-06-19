//1. Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n.(factorial of 5= 5*4*3*2*1=120)

function factorial(n) {
    if (n === 0) {
     return 1;
   }   
   return n * factorial(n - 1);
 }
 
 console.log(factorial(5));




//2write a function isPrime(num) that takes a positive integer num and returns true if the number is prime, and false otherwise  



const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

if (number === 1) {
   console.log("1 is neither prime nor composite number.");
}


else if (number > 1) {

   
   for (let i = 2; i < number; i++) {
       if (number % i == 0) {
           isPrime = false;
           break;
       }
   }

   if (isPrime) {
       console.log(`${number} is a prime number`);
   } else {
       console.log(`${number} is a not prime number`);
   }
}


else {
   console.log("The number is not a prime number.");
}




//3 Write a function sumEvenNumbers(start, end) that takes two
// integers start and end, and returns the sum of all even numbers in the inclusive range from start to end.




function sumEvenNumbers(start, end) { 
   if (start > end) {
       [start, end] = [end, start];
   }
   let sum = 0;
   for (let i = start; i <= end; i++) {
      if (i % 2 === 0) {
       sum += i;
       }
   }
   return sum;
}

console.log(sumEvenNumbers(1, 10)); 

// 4 Write a JavaScript program to remove items(clicking on a button) from a drop-down list.



function removeSelectedItem() {
  
    var selectElement = document.getElementById("colorSelect");
    var selectedIndex = selectElement.selectedIndex;
    if (selectedIndex >= 0) {
       selectElement.remove(selectedIndex);
   }
}

// 5 Write a JavaScript program to change the  color given text in p tag  Eg : if you select green then the color of the text should be green 



function changeTextColor() {
 
   var selectElement = document.getElementById("colorSelect");
   var selectedColor = selectElement.value;
   var pElement = document.getElementById("displayText");
    pElement.style.color = selectedColor;
}


// 6. Write a JavaScript function to get the values of First and Last names of the following form.



function getNames(event) {
   event.preventDefault();
   
   
   var firstName = document.getElementById("fname").value;
   var lastName = document.getElementById("lname").value;
   
  
   console.log("First Name: " + firstName);
   console.log("Last Name: " + lastName);
}