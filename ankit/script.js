// //
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// for(let i=2; i<=20; i+=2){
//     console.log(i);
// }

// for(let i=1; i<=10; i++){
//     console.log(i*i);
// }

// for(let i=10; i>=1; i--){
//     console.log(i);
// }

// let num=5;
// for(let i=1; i<=10; i++){
//     console.log(num*i);
// }


// for(let i=1; i<=30; i+=2){
//     console.log(i);
// }


// let num=7;
// for(let i=1; i<=10; i++){
//     console.log(num*i);
// }

// for(let i=50; i<=100; i+=10){
//     console.log(i);
// }


// let sum = 0;
// for(let i=1; i<=100; i++){
//     sum += i;
// }
// console.log(sum);


// for(let i=1; i<=10; i++){
//     console.log(i);
// }


// for(let i=1; i<=20; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// let num=5;
// for(let i=1; i<=10; i++){
//     console.log(num*i);
// }


// for(let i=1; i<=5; i++){
//     console.log(i*i);
// }


// for(let i=10; i>=1; i--){
//     console.log(i);
// }



// for(let i=1; i<=50; i++){
//     if(i%7==0){
//         console.log(i);
//     }
// }


// let sum=0;
// for(let i=1; i<=100; i++){
//     sum += i;
// }
// console.log(sum);


// for(let i=6; i<=60; i+=6){
//     console.log(i);
// }

// let num = parseInt(prompt("Enter any number"));
// let fact=1;
// for(let i=num; i>=1; i--){
//     fact *= i;
// }
// console.log(fact);


// let num = parseInt(prompt("Enter any number"));
// let count=0;
// for(let i=num; i>=0; i=parseInt(i/10)){
//     count++;
// }
// console.log(count);


// let num = parseInt(prompt("Enter any number"));
// for(let i=1; i<=num; i++){
//     console.log(i*i);
// }


// let sum=0;
// for(let i=1; i<=50; i++){
//     if(i%2 !=0){
//         sum += i;
//     }
// }
// console.log(sum);



// let num = parseInt(prompt("Enter any number"));
// let count = 0;
// for(let i=num; i>0; i=parseInt(i/10)){
//     let digit = i%10;
//     if(digit == 7){
//         count++;
//     }
// }
// console.log(count);


// let count=0;
// for(let i=1; i<=100; i++){
//     if(i%7==0){
//         count++;
//     }
// }
// console.log(count);


// let sum=0;
// for(let i=1; i<=40; i++){
//     if(i%4 == 0){
//         sum += i;
//     }
// }
// console.log(sum);


// for(let i=10; i<=50; i++){
//     if(i%2 != 0 && i%3 != 0 && i%5 != 0 && i%7 != 0){
//         console.log(i);
//     }
// }



// 1. Reverse a Number 
// Take an integer input and print its reverse using a loop. 
// Example: Input = 123 → Output = 321 

// let num =parseInt(prompt("enter number"));
// let reverse = 0;
// for(let i=num; i>0; i=parseInt(i/10)){
//     console.log(i);
//     let digit = i % 10; 
//     reverse = reverse * 10 + digit; 
// } 
// console.log(reverse);

// 2. Check Palindrome Number 
// Definition: A number is called a palindrome if it remains the same when its digits are reversed. 
// Example: 121, 1331, 12321 
// Write a program to check if a number is a palindrome using a loop. 

// let num = parseInt(prompt("enter number"));
// let re = 0;
// for(let i=num;i>0;i=parseInt(i/10)){
//     let digit = i % 10;
//     re = re * 10 + digit;
// }
// if(num == re){
//     console.log(num + " palindrome");
// }
// else{
//     console.log(" not palindrome");
// }


// 3. Print Fibonacci Series up to N terms 
// Generate and print the first N Fibonacci numbers using a loop. 
// Example: 0, 1, 1, 2, 3, 5, 8... 

    // let num = parseInt(prompt("N = "));
    // let a = 0, b = 1, nextTerm;

    // for (let i = 0; i < num; i++) {
    //     if (i <= 1) {
    //         nextTerm = i;
    //     } else {
    //         nextTerm = a + b;
    //         a = b;
    //         b = nextTerm;
    //     }
    //     console.log(nextTerm);
    // }

// 4. Check Armstrong Number
// Definition: A number is an Armstrong number if the sum of its digits each raised to the power of the number of digits equals the number itself.
// Example: 153 → 1³ + 5³ + 3³ = 153
// Use a loop to check if a number is Armstrong.

    // let num = parseInt(prompt("enter any value"));
    // let sum = 0;
    // for(let i=num; i>0; i=parseInt(i/10)){
    //     let digit = i%10;
    //     sum = sum + (digit*digit*digit);
    // }
    // if(num === sum){
    //     console.log( num + " is an Armstrong number");
    // }
    // else{
    //     console.log("NOT an Armstrong NUmber")
    // }

// 5. Factorial of a Number
// Calculate the factorial of a given number using a loop.
// Example: 5! = 120

    // let num = parseInt(prompt("enter number"));
    // let factorial=1;
    // for(let i=num; i>=1;i--){
    //     factorial=factorial*i;
    // }
    // console.log(factorial);

// 6. Print Multiplication Table
// Print the multiplication table for a number using a loop.
// Example: 2 × 1 = 2 up to 2 × 10 = 20

    // let num = parseInt(prompt("enter number"));
    // for(let i=1;i<=10; i++){
    //     console.log(num+ " * " + i + " = " + i*num);
    // }

// 7. Count the Number of Digits
// Count how many digits are in the input number using a loop.
// Example: 1234 → 4 digits

    //  let num = parseInt(prompt("enter number"));
    //  let count=0;
    //  for(let i=num; i>0;i=parseInt(i/10)){
    //     count ++; 
    //  }
    //  console.log(count);

// 8. Sum of Digits
// Write a loop to sum the digits of a number.
// Example: 456 → 4+5+6 = 15

    // let num = parseInt(prompt("enter number"));
    // let sum=0;
    // for(let i=num; i>0; i=parseInt(i/=10)){
    //     let digit=i%10;
    //     sum = sum + (digit);
    // }
    // console.log(sum);

// 9. Print All Even Numbers from 1 to N
// Using a loop, print all even numbers from 1 to a given number N.

    // let num = parseInt(prompt("enter number"));
    // for(let i=0;i<=num;i +=2){
    //     console.log(i);
    // }

// 10. Print Prime Numbers from 1 to 100
// Use loops to print all prime numbers between 1 and 100. 

    // for(let i=2; i<=100; i++){
    //     let prime = true;

    //     for(let j = 2; j<i; j++){
    //         if(i % j == 0){
    //             prime = false;
    //             break;
    //         }
    //     }
    //     if(prime){
    //         console.log(i);
    //     }
    // }