//             <-- Easy Level (1–10) -->
// 1. Greeting Function
// Create a function greet(name) that prints:
// Hello, John!
    // function greet(name){
    //     document.write(`Hello, ${name}!`);
    // }
    // greet("John");

// 2. Add Two Numbers
// Create a function that accepts two numbers and returns their sum.
    // function Addition(a, b){
    //     return a + b;
    // }
    // let result = Addition(10,20);
    // document.write(`Sum of two Number ${result}`);

// 3. Subtract Two Numbers
// Create a function that returns the subtraction of two numbers.
    // function Subtraction(a, b){
    //     return a - b;
    // }
    // let result = Subtraction(10,20);
    // document.write(`Subtract of two Numbers ${result}`);
    
// 4. Multiply Two Numbers
// Create a function that returns the multiplication of two numbers.
    // function multiplication(a, b){
    //     return a * b;
    // }
    // let result = multiplication(10,20);
    // document.write(`multiplication of two Numbers ${result}`);

// 5. Divide Two Numbers
// Create a function that returns the division of two numbers.
    // function division(a, b){
    //     return a * b;
    // }
    // let result = division(10,20);
    // document.write(`division of two Numbers ${result}`);

// 6. Check Even or Odd
// Create a function that checks whether a number is even or odd.
    // function evenOdd(num){
    //     if(num % 2 == 0){
    //         document.write(`${num} is Even Number`);
    //     }
    //     else{
    //         document.write(`${num} is Odd Number`);
    //     }
    // }
    // let a = parseInt(prompt("Enter a number"));
    // evenOdd(a);

// 7. Check Positive, Negative, or Zero
// Create a function that identifies whether a number is positive, negative, or zero.
    // function posNeg(a){
    //     if(a < 0){
    //         document.write(`${a} is Negative`);
    //     }
    //     else if(a == 0){
    //         document.write(`${a} is Zero`);
    //     }
    //     else{
    //         document.write(`${a} is Positive`);
    //     }
    // }
    // let num = parseInt(prompt("Enter a number"));
    // posNeg(num);

// 8. Find the Larger of Two Numbers
// Create a function that returns the larger of two numbers.
    // function larger(a, b){
    //     if(a>b){
    //         return a;
    //     }
    //     else{
    //         return b;
    //     }
    // }
    // let result = larger(10, 30);
    // document.write(`Larger of two numbers is ${result}`);

// 9. Find the Largest of Three Numbers
// Create a function that returns the largest among three numbers.
    // function larger(a, b, c){
    //     if(a>b && a>c){
    //         return a;
    //     }
    //     else if(b>c && b>a){
    //         return b;
    //     }
    //     else{
    //         return c;
    //     }
    // }
    // let result = larger(20, 30, 10);
    // document.write(`Larger of three numbers is ${result}`);

// 10. Check Leap Year
// Create a function that checks whether a given year is a leap year.
    // function leapYear(year){
    //     if(year % 4 == 0 ){
    //         return "is a Leap Year";
    //     }
    //     else{
    //         return "is not a leap Year";
    //     }
    // }
    // let year = parseInt(prompt("Enter a Year"));
    // let result = leapYear(year);
    // document.write(`${year} ${result}`);

//            <-- Medium Level (11–20) -->

// 11. Calculate Factorial
// Create a function to find the factorial of a number.
// Example:
// Input: 5
// Output: 120
    // let num = parseInt(prompt("Enter a number"));
    // const factorial = function (num) {
    //     let fact = 1;
    //     for(let i=1; i<=num; i++){
    //         fact *= i;
    //     }
    //     document.write(`Factorial of a number is ${fact}`);
    // };
    // factorial(num);

// 12. Print Multiplication Table
// Create a function that prints the multiplication table of a given number (1–10).
    // let num = parseInt(prompt("Enter a number"));
    // const multipalictionTable = function(num){
    //     for(let i=1; i<=10; i++){
    //         document.write(`${num} x ${i} = ${num * i}<br>`);
    //     }
    // }
    // multipalictionTable(num);

// 13. Sum of First N Numbers
// Create a function that returns the sum of the first N natural numbers.
// Example:
// Input: 10
// Output: 55
    // let num = parseInt(prompt("Enter any number"));
    // let sum = 0; 
    // const sumOfNumber = function(num){
    //     for(let i=1; i<=num; i++){
    //         sum += i;
    //     }
    //     document.write(`Sum of 1 to ${num} Numbers: ${sum}`);
    // }
    // sumOfNumber(num);

// 14. Reverse a Number
// Create a function to reverse a given number.
// Example:
// Input: 12345
// Output: 54321
    // let num = parseInt(prompt("Enter a number"));
    // const Reverse = function(num){
    //     let remainder = 0;
    //     let reverseNumber = 0;
    //     for(let i=num; i>0; i=parseInt(i/10)){
    //         remainder = i%10;
    //         reverseNumber = reverseNumber * 10 + remainder;
    //     }
    //     document.write(`Your Number is: ${num}<br>Reverse Number is: ${reverseNumber}`);
    // }
    // Reverse(num);

// 15. Count Digits
// Create a function that counts the number of digits in a given number.
// Example:
// Input: 987654
// Output: 6
    // let num = parseInt(prompt("Enter a number"));
    // const CountDigits = function(num){
    //     let count = 0;
    //     for(let i=num; i>0; i=parseInt(i/10)){
    //         count++;
    //     }
    //     document.write(`Your Total Digits are: ${count}`);
    // }
    // CountDigits(num);

// 16. Sum of Digits
// Create a function that returns the sum of all digits in a number.
// Example:
// Input: 456
// Output: 15
    // let num = parseInt(prompt("Enter a number"));
    // const SumOfDigits = function(num){
    //     let digit=0;
    //     let sum = 0;
    //     for(let i=num; i>0; i=parseInt(i/10)){
    //         digit = i%10;
    //         sum += digit;
    //     }
    //     document.write(`Your Input is ${num}<br>Sum of Digits are: ${sum}`);
    // }
    // SumOfDigits(num);

// 17. Check Palindrome Number
// Create a function to check whether a number is a palindrome.
// Example:
// Input: 121
// Output: Palindrome
    // let num = parseInt(prompt("Enter a number"));
    // const checkPalindrome = function(num){
    //     let rem = 0;      // remainder
    //     let reverse = 0;    // ReverseNumber
    //     for(let i=num; i>0; i=parseInt(i/10)){
    //         rem = i%10;
    //         reverse = reverse * 10 + rem;
    //     }
    //     if(num == reverse){
    //         document.write(`${num} is Palindrome number`);
    //     }
    //     else{
    //         document.write(`${num} is not Palindrome number`);
    //     }
    // }
    // checkPalindrome(num);

// 18. Check Prime Number
// Create a function that checks whether a number is prime.
    // let num = parseInt(prompt("Enter a Positive number"));
    // const checkPrime = function(num){
    //     if(num==2 || num==3 || num==5 || num==7){
    //         document.write(`Your Nubmer ${num} is a Prime number.`);
    //     }
    //     else if(num%2==0 || num%3==0 || num%5==0 || num%7==0){
    //         document.write(`Your Nubmer ${num} is not a Prime number.`);
    //     }
    //     else{
    //         document.write(`Your Nubmer ${num} is a Prime number.`);
    //     }
    // }
    // checkPrime(num);

// 19. Print Fibonacci Series
// Create a function that prints the Fibonacci series up to N terms.
// Example:
// Input: 8
// Output: 0 1 1 2 3 5 8 13
    // let num = parseInt(prompt("Enter a number"));
    // const fibonacciSeries = function(num){
    //     let a = 0, b = 1, nextTerm;
    //     for (let i = 0; i <num; i++) {
    //         if (i <= 1) {
    //             nextTerm = i;
    //         } else {
    //             nextTerm = a + b;
    //             a = b;
    //             b = nextTerm;
    //         }
    //         document.write(`${nextTerm} `);
    //     }
    // }
    // fibonacciSeries(num);

// 20. Check Armstrong Number
// Create a function that checks whether a number is an Armstrong number.
// Example:
// Input: 153
// Output: Armstrong
    // let num = parseInt(prompt("Enter any number"));
    // const checkArmstrong = function(num){
    //     let rem = 0;      // remainder
    //     let sum = 0;    // ReverseNumber
    //     for(let i=num; i>0; i=parseInt(i/10)){
    //         rem = i%10;
    //         sum = sum + (rem*rem*rem);
    //     }
    //     if(num == sum){
    //         document.write(`${num} is Armstrong number`);
    //     }
    //     else{
    //         document.write(`${num} is not Armstrong number`);
    //     }
    // }
    // checkArmstrong(num);
    

//                <--Hard Level (21–30)-->

// 21. Print Even Numbers in a Range
// Create a function that prints all even numbers between two given numbers.
    // let start = parseInt(prompt("Enter Starting Number"));
    // let end = parseInt(prompt("Enter Ending Number"));
    // const EvenInRange = (start, end) =>{
    //     for(let i=start; i<=end; i++){
    //         if(i%2==0){
    //             document.write(`${i} `);
    //         }
    //     }
    // }
    // document.write(`Even Numbers are: <br>`);
    // EvenInRange(start, end);

// 22. Print Odd Numbers in a Range
// Create a function that prints all odd numbers between two given numbers.
    // let start = parseInt(prompt("Enter Starting Number"));
    // let end = parseInt(prompt("Enter Ending Number"));
    // const OddInRange = (start, end) =>{
    //     for(let i=start; i<=end; i++){
    //         if(i%2!==0){
    //             document.write(`${i} `);
    //         }
    //     }
    // }
    // document.write(`Odd Numbers are: <br>`);
    // OddInRange(start, end);

// 23. Count Even Numbers in a Range
// Create a function that returns the total number of even numbers within a given range.
    // let start = parseInt(prompt("Enter Starting Number"));
    // let end = parseInt(prompt("Enter Ending Number"));
    // let count=0;
    // const countEven = (start, end) =>{
    //     for(let i=start; i<=end; i++){
    //         if(i%2==0){
    //             count++;
    //         }
    //     }
    //     return count;
    // }
    // countEven(start, end);
    // document.write(`Total number of Even Numbers in your given Range: ${count}`);

// 24. Count Odd Numbers in a Range
// Create a function that returns the total number of odd numbers within a given range.
    // let start = parseInt(prompt("Enter Starting Number"));
    // let end = parseInt(prompt("Enter Ending Number"));
    // let count=0;
    // const countOdd = (start, end) =>{
    //     for(let i=start; i<=end; i++){
    //         if(i%2!=0){
    //             count++;
    //         }
    //     }
    //     return count;
    // }
    // countOdd(start, end);
    // document.write(`Total number of Odd Numbers in your given Range: ${count}`);

// 25. Sum of Even Numbers
// Create a function that returns the sum of all even numbers within a given range.
    // let start = parseInt(prompt("Enter Starting Number"));
    // let end = parseInt(prompt("Enter Ending Number"));
    // let sum=0;
    // const sumOfEven = (start, end) =>{
    //     for(let i=start; i<=end; i++){
    //         if(i%2==0){
    //             sum += i;
    //         }
    //     }
    //     return sum;
    // }
    // sumOfEven(start, end);
    // document.write(`Total Sum of All Even Numbers in your given Range: ${sum}`);

// 26. Sum of Odd Numbers
// Create a function that returns the sum of all odd numbers within a given range.
    // let start = parseInt(prompt("Enter Starting Number"));
    // let end = parseInt(prompt("Enter Ending Number"));
    // let sum=0;
    // const oddOfSum = (start, end) =>{
    //     for(let i=start; i<=end; i++){
    //         if(i%2!=0){
    //             sum += i;
    //         }
    //     }
    //     return sum;
    // }
    // oddOfSum(start, end);
    // document.write(`Total Sum of All Odd Numbers in your given Range: ${sum}`);

// 27. Print Prime Numbers in a Range
// Create a function that prints all prime numbers between two given numbers.
    // let start = parseInt(prompt("Enter Starting Number"));
    // let end = parseInt(prompt("Enter Ending Number"));
    // const primeInRange = (start, end) =>{
    //     for(let i=start; i<=end; i++){
    //         if(i==2 || i==3 || i==5 || i==7){
    //             document.write(`${i} `);
    //         }
    //         else if(i%2==0 || i%3==0 || i%5==0 || i%7==0){
    //             document.write("");
    //         }
    //         else{
    //             document.write(`${i} `);
    //         }
    //     }
    // }
    // document.write("Prime Numbers: ")
    // primeInRange(start, end);

// 28. Find the Greatest Common Divisor (GCD)
// Create a function that returns the GCD of two numbers.
// Example:
// Input: 24, 36
// Output: 12
    // function findGCD(num1, num2) {
    //     while (num2 !== 0) {
    //         let temp = num2;
    //         num2 = num1 % num2;
    //         num1 = temp;
    //     }
    //     return num1;
    // }
    // console.log(findGCD(18, 30)); 

// 29. Find the Least Common Multiple (LCM)
// Create a function that returns the LCM of two numbers.
// Example:
// Input: 12, 18
// Output: 36
    // function findGCD(num1, num2) {
    //     while (num2 !== 0) {
    //         let temp = num2;
    //         num2 = num1 % num2;
    //         num1 = temp;
    //     }
    //     return num1;
    // }

    // function findLCM(num1, num2) {
    //     return (num1 * num2) / findGCD(num1, num2);
    // }
    // console.log(findLCM(12, 18));

// 30. Build a Simple Calculator
// Create a function:
// calculator(num1, num2, operator)
// The function should perform:
// Addition (+)
// Subtraction (-)
// Multiplication (*)
// Division (/)
// Modulus (%)
// Use a switch statement to perform the selected operation.
    // function calculator(num1, num2, operator) {
    //     switch (operator) {
    //         case "+":
    //             return num1 + num2;

    //         case "-":
    //             return num1 - num2;

    //         case "*":
    //             return num1 * num2;

    //         case "/":
    //             if (num2 === 0) {
    //                 return "Division by zero is not allowed!";
    //             }
    //             return num1 / num2;

    //         case "%":
    //             if (num2 === 0) {
    //                 return "Modulus by zero is not allowed!";
    //             }
    //             return num1 % num2;

    //         default:
    //             return "Invalid Operator";
    //     }
    // }
    // console.log(calculator(10, 5, "+")); 
    // console.log(calculator(10, 5, "-")); 
    // console.log(calculator(10, 5, "*")); 
    // console.log(calculator(10, 5, "/")); 
    // console.log(calculator(10, 5, "%")); 