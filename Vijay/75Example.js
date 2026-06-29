// 1. Check if a number is positive
// let num = parseInt(prompt("enter number"));

// if(num >= 0){
// document.write(`positive number`);
// }
//   else{
//   document.write(`negative number`);
//    }

// Input: 5
// Output: Positive number

//   2. Check if a number is negative

// let num = parseInt(prompt("enter number"));
// console.log(num < 0 ?"negative" :"positive");

//   Input: -3
//   Output: Negative number


//   3. Check if a number is even

// let num = parseInt(prompt("enter number"));
// console.log(num % 2 == 0 ?"even" :"odd");

// Input: 8

// Output: Even number

//   4. Check if a number is odd

// let num = parseInt(prompt("enter a number"));
// console.log(num % 3 == 0)

// Input: 9

// Output: Odd number

//   5. Check if a number is a multiple of 3


// let num = parseInt(prompt("enter number"));
// console.log(num % 3 == 0 ?"multiple of 3" :"multiple of another");

// Input: 15

// Output: Multiple of 3

//   6. Check if a string is empty

// let str = prompt("enter number or string");
// console.log(str === "" ?"empty" :"no empty" );

// Input: ""

// Output: String is empty

//   7. Check if an entered password is correct

// let password = prompt("enter password");
// console.log(password === "admin123" ?"correct" :"wrong" );

// Input: "admin123"

// Output: Access Granted

//   8. Check if a student passed . Student is passed when he got atleast 40 marks

// let marks =parseInt(prompt("enter marks"));
// console.log(marks >= 40 ?"passed" :"fail");

// Input: 35

// Output: Failed


//   9. Check if an employee worked overtime . Overtime means when an employee works more that 60 hours a week

// let time = parseInt(prompt("enter hours"));
// console.log(time >= 60 ?"over time done" :"over time not done");

// Input: 45

// Output: Overtime not Done



//   10. Check if a customer is eligible for a discount . When a person spend more than 500 ruppees he is eligible for discount

// let price = parseInt(prompt("enter money"));
// console.log(price >= 500 ?"eligible for discount " :"not eligible for discount");

// Input: 1500

// Output: Eligible for Discount


//   11. Check if a triangle is equilateral (all sides equal)

// let t1 = parseInt(prompt("enter the 1st value of a triangle"));
// let t2 = parseInt(prompt("enter the 2nd value of a triangle"));
// let t3 = parseInt(prompt("enter the 3rd value of a triangle"));

// console.log(t1 == t2 && t1 == t3  ? "triangle is equal" : "not equal");

// Input: 5,5,5

// Output: Equilateral Triangle


//   13. Check if a number is greater than 1000

// let num = parseInt(prompt("enter number"));
// console.log(num >= 1000 ?"greater than 1000" :"not greater than 1000");

// Input: 500

// Output: Not Greater than 1000

//   14. Check if a car has fuel left

// let fuel = parseInt(prompt("enter fuel "));
// console.log(fuel >= 1 ?"fuel left" :"fuel needed");

// Input: 0 liters

// Output: Refuel Needed


//   15. Check if a player has scored a century in cricket

// let century = parseInt(prompt("enter score"));
// console.log(century >= 100 ?"century scored" :"need more runs");

// Input: 105

// Output: Century Scored!


//   16. Check if a given temperature is above freezing (0°C)

// let tem = parseInt(prompt("enter temperature"));
// console.log(tem >= 0 ?" freezing" :"below freezing");

// Input: -5°C

// Output: Below Freezing


//   17. Check if an integer is a power of 2


// let num = parseInt(prompt("enter value"));
// console.log(num % 2 == 0 ?"power of 2" :"not power of 2");

// Input: 8

// Output: Power of 2

//   18. Check if a number is positive or negative

// let num = parseInt(prompt("enter number"));
// console.log( num >= 0 ?"number is positive" :"number is negative");

// Input: 5

// Output: Positive number

// Input: -3

// Output: Negative number

// 19. Check if a user is a minor or an adult (age ≥ 18 is adult)

// let age = parseInt(prompt("enter age"));
// console.log(age >= 18 ?"your are adult" :"tum abhi bache go");

// Input: 17

// Output: Minor

// Input: 20

// Output: Adult

//   20. Check if a temperature is above or below 30°C

//  let temp = parseInt(prompt("enter temperature"));

// console.log(temp >=30 ?"hot weather" :"cold ");

// Input: 25°C

// Output: Cold Weather

// Input: 35°C

// Output: Hot Weather


//   21. Check if a user can log in (correct password is "admin123")

// Input: "admin123"

// Output: Access Granted

// Input: "password"

// Output: Access Denied

// let password = "admin123";

// if (password === "admin123") {
//     console.log("Access Granted");
// } else {
//     console.log("Access Denied");
// }


//   22. Check if a year is a leap year .

//  let year = parseInt(prompt("enter year"));
//  console.log(year % 4 == 0 ?"leap year" :"no");

// Input: 2024

// Output: Leap Year

// Input: 2023

// Output: Not a Leap Year

//   23. Check if a letter is a vowel or consonant

// let str = prompt("enter a letter");
// console.log(str == 'a' ||str == 'e' ||str == 'i' ||str == 'o' ||str == 'u' ?"vowel" :"consonant");

// Input: 'A'

// Output: Vowel

// Input: 'B'

// Output: Consonant

//   24. Check if an ATM withdrawal is possible (balance check)


// let balance = parseInt(prompt("enter balance"));
// let withdrawal = parseInt(prompt("enter money"));
// console.log(balance >= withdrawal ?"successful" :"Insufficient");

// Input: Balance: 500, Withdrawal: 300

// Output: Transaction Successful

// Input: Balance: 200, Withdrawal: 500

// Output: Insufficient Balance

//    25. Check if a student passed or failed (pass marks ≥ 40)

// let marks = parseInt(prompt("enter marks"));
// switch(marks >= 40){
//         case true:
//         console.log("you are passed");
//         break;
//         case false:
//                 console.log("you are fail");
// }

// Input: Marks: 75

// Output: Passed

// Input: Marks: 35

// Output: Failed

//   27. Check if a user is eligible for a discount (purchase > 1000)

// let num = parseInt(prompt("enter money"));
// switch(num >= 1000){
//         case true:
//                 console.log("you are eligible for discount");
//                 break;
//                 case false:
//                         console.log("not eligible");
// }

// Input: Purchase: 1500

// Output: Eligible for Discount

// Input: Purchase: 800

// Output: Not Eligible for Discount

//   28. Check if a number is positive, negative, or zero

// let num = parseInt(prompt("enter number"));

// if(num == 0){
//     console.log("zero");
//     }
//     else if(num > 0) {
//         console.log("positive");
//     }
//     else{
//         console.log("negative");
//     }

// Input: 5

// Output: Positive number

// Input: -3

// Output: Negative number

// Input: 0

// Output: Zero

//   29. Check the grade based on marks

// let num = parseInt(prompt("enter number"));
// if(num > 70){
//             console.log("a grade")
//     }
//     else if(num > 55 && num <=70) {
//                 console.log("b grade");
//         }
//         else if (num > 30 && num <= 55){
//                     console.log("c grade");
//             }
//             else{
//                         console.log("fail");
//                 }

// Input: Marks: 85

// Output: Grade: A

// Input: Marks: 70

// Output: Grade: B

// Input: Marks: 55

// Output: Grade: C

// Input: Marks: 30

// Output: Fail

//   30. Check if a person is underweight, normal, or overweight based on BMI

//  let weight = parseInt(prompt("enter your weight"));
//  if(weight >= 75){
    //         console.log("overweight");
    //  }
    //  else if(weight >= 55){
        //         console.log("normel weight");
        //  }
        //  else if(weight <=55) {
            //         console.log("underweight");
            //  }

// Input: BMI: 17

// Output: Underweight

// Input: BMI: 22

// Output: Normal weight

// Input: BMI: 28

// Output: Overweight

//   31. Identify a triangle type based on its sides

// let side1 = parseInt(prompt("enter value"));
// let side2 = parseInt(prompt("enter value"));
// let side3 = parseInt(prompt("enter value"));
// if(side1 == side2 && side1 == side3 ){
//         console.log(" Equilateral Triangle ")
// }
// else if(side1 == side2 || side2 == side3 || side1 == side3){
//         console.log("Isosceles Triangle ");
// }
// else{
//         console.log("Scalene Triangle ")
// }

// Input: Sides: 5, 5, 5

// Output: Equilateral Triangle

// Input: Sides: 5, 5, 3

// Output: Isosceles Triangle

// Input: Sides: 3, 4, 5

// Output: Scalene Triangle

//   32. Determine age category

// let age = parseInt(prompt("enter your age"));
// if(age >= 20){
//         console.log("adult");
// }
// else if(age >= 12){
//         console.log("teenager");
// }
// else if(age >= 6){
//         console.log("child");
// }
// else{
//         console.log("toddler");
// }

// Input: Age: 5

// Output: Toddler

// Input: Age: 12

// Output: Child

// Input: Age: 19

// Output: Teenager

// Input: Age: 30

// Output: Adult

//   33. Check the water level in a tank

//  let water = parseInt(prompt("enter water level"));
//  if(water >= 80){
//         console.log("full");
//  }
//  else if(water >= 40){
//         console.log("moderate");
//  }
//  else{
//         console.log("low");
//  }

// Input: Level: 10%

// Output: Very Low

// Input: Level: 40%

// Output: Moderate

// Input: Level: 80%

// Output: Full

//   34. Check the temperature range

//  let temp = parseInt(prompt("enter temperature"));
//  if(temp >= 30){
//         console.log("hot");
//  }
//  else if(temp >= 25){
//         console.log("warm");
//  }
//  else{
//         console.log("cold")
//  }

// Input: Temp: -5°C

// Output: Freezing Cold

// Input: Temp: 15°C

// Output: Cold

// Input: Temp: 28°C

// Output: Warm

// Input: Temp: 40°C

// Output: Hot

//   35. Determine train ticket fare based on age

//  let age = parseInt(prompt("enter your age"));
//  if(age >= 60){
//         console.log("Senior Citizen Discount ");
//  }
//  else if(age >= 20){
//         console.log("full fare");
//  }
//  else if(age >= 5){
//         console.log("half fare");
//  }
//  else {
//         console.log("free ticket");
//  }

// Input: Age: 5

// Output: Free Ticket

// Input: Age: 15

// Output: Half Fare

// Input: Age: 30

// Output: Full Fare

// Input: Age: 65

// Output: Senior Citizen Discount

//   36. Categorize mobile battery level

//  let battery = parseInt(prompt("enter battery level"));
//  if(battery >= 90){
//         console.log("full");
//  }
//  else if(battery >= 50){
//         console.log("medium");
//  }
//  else if(battery >= 25){
//         console.log("low");
//  }
//  else{
//         console.log("Critical - Plug in Now! ")
//  }

// Input: Battery: 5%

// Output: Critical - Plug in Now!

// Input: Battery: 30%

// Output: Low

// Input: Battery: 60%

// Output: Medium

// Input: Battery: 90%

// Output: Full

//   37. Check work shift based on hours worked

// let hours = parseInt(prompt("enter hours"));
// if(hours >= 10){
//         console.log("overtime");
// }
// else if(hours >= 8){
//         console.log("full time");
// }
// else{
//         console.log("parttime")
// }

// Input: Hours: 5

// Output: Part-time

// Input: Hours: 8

// Output: Full-time

// Input: Hours: 12

// Output: Overtime

//   38. Check if a number is positive, and further check if it's even or odd

//  let num = parseInt(prompt("enter number "));
//  if (num % 2 == 0 && num >=0){
//         console.log("positive and even");
//  }
//  else if(num % 2 == 1 && num >= 0){
//         console.log("positive or odd ");
//  }
//  else{
//         console.log("negative");
//  }

// Input: 6

// Output: Positive and Even

// Input: 7

// Output: Positive and Odd

// Input: -4

// Output: Negative Number

//   39. Check if a student has passed, and determine if they got distinction

//  let marks = parseInt(prompt("enter marks"));
//  if(marks >= 80){
//         console.log("Passed with Distinction ");
//  }
//  else if(marks >= 36){
//         console.log("passed");
//  }
//  else{
//         console.log("failled")
//  }

// Input: Marks: 85

// Output: Passed with Distinction

// Input: Marks: 50

// Output: Passed

// Input: Marks: 30

// Output: Failed

//   40. Check if a person can drive (above 18), and if they have a valid license

// let age = parseInt(prompt("enter age"));
// let str = prompt("license");
//     if((age >= 18) && (str == "no" || str == "No")){
//         console.log("Get a License First ");
//        }
//     else if(age >= 18 ){
//         console.log("allowed to drive");
//        }
//     else {
//         console.log(" Too Young to Drive ")
// }

// Input: Age: 20, License: Yes

// Output: Allowed to Drive

// Input: Age: 20, License: No

// Output: Get a License First

// Input: Age: 16, License: No

// Output: Too Young to Drive

//   41. Check if a number is divisible by 5, and further check if it's also divisible by 10

//  let num = parseInt(prompt("enter number"));
//  if((num % 5 == 0 ) && (num % 10 == 0)){
//         console.log("Divisible by 5 and 10");
//  }
//  else if ((num % 5 == 0) && (num % 10 != 0)){
//         console.log("Divisible by 5 but not 10");
//  }
//  else{
//         console.log("Not Divisible by 5");
//  }

// Input: 50

// Output: Divisible by 5 and 10

// Input: 25

// Output: Divisible by 5 but not 10

// Input: 13

// Output: Not Divisible by 5

//   42. Check if an entered username is correct, and then check if the password is correct

// let name = prompt("enter username");
// let pass = prompt("enter password");
// if((name == "admin") && (pass == "pass123")){
//         console.log("Login Successful ");
// }
// else if(pass != "pass123" ){
//         console.log("Incorrect Password");
// }
// else{
//         console.log("Incorrect Username ");
// }

// Input: Username: "admin", Password: "pass123"

// Output: Login Successful

// Input: Username: "admin", Password: "wrongpass"

// Output: Incorrect Password

// Input: Username: "user", Password: "pass123"

// Output: Incorrect Username

//   43. Check if a number is positive, and then check if it's a prime number

//  let num = parseInt(prompt("enter number"));

//  if((num >= 0) && (num % 3 == 0)){
//      console.log("Positive and Prime ");
//  }
//  else if((num >= 0) && (num % 3 != 0)){
//         console.log("Positive but Not Prime ");
//  }
//  else{
//         console.log("Negative Number ");
//  }

// Input: 7

// Output: Positive and Prime

// Input: 10

// Output: Positive but Not Prime

// Input: -5

// Output: Negative Number

//   44. Check if a mobile phone is on, and if yes, check battery level

//  let battery = parseInt(prompt("enter battery percent"));
//  let phone = prompt("phone is on or off");
//  if((battery >= 50) && (phone == 'on')){
//         console.log("phone on ,Battery Sufficient");
//  }
//  else if(phone != 'on'){
//         console.log(" Phone is Off");
//  }
//  else{
//         console.log("phone on ,battery low");
//  }

// Input: Phone: On, Battery: 80%

// Output: Phone On, Battery Sufficient

// Input: Phone: On, Battery: 5%

// Output: Phone On, Battery Low

// Input: Phone: Off, Battery: 50%

// Output: Phone is Off


//   45 Check if a number is greater than 1000, and then check if it's a multiple of 100

//  let num = parseInt(prompt("enter number"));
//  if(num % 100 != 0){
//         console.log("Greater than 1000 but Not Multiple of 100 ");
//  }

//  else if((num >= 1000) && (num % 100 == 0)){
//         console.log(" Greater than 1000 and Multiple of 100");
//  }
//  else{
//         console.log("Less than 1000");
//  }

// Input: 1500

// Output: Greater than 1000 and Multiple of 100

// Input: 1150

// Output: Greater than 1000 but Not Multiple of 100

// Input: 800

// Output: Less than 1000

//   46. Check if a year is a leap year, and then check if it's a century year

// let year = Number(prompt("Enter a year:"));

// switch (true) {
//     case (year % 400 === 0):
//         document.write("Leap Year and Century Year");
//         break;

//     case (year % 4 === 0 && year % 100 !== 0):
//         document.write("Leap Year but Not a Century Year");
//         break;

//     default:
//         document.write("Not a Leap Year");
// }

// Input: 2000

// Output: Leap Year and Century Year

// Input: 2024

// Output: Leap Year but Not a Century Year

// Input: 2019

// Output: Not a Leap Year


//   48. Get the day of the week based on a number

// let day = Number(prompt("Enter a number (1-7):"));
// switch (day) {
//     case 1:
//         document.write("Monday");
//         break;

//     case 2:
//         document.write("Tuesday");
//         break;

//     case 3:
//         document.write("Wednesday");
//         break;

//     case 4:
//         document.write("Thursday");
//         break;

//     case 5:
//         document.write("Friday");
//         break;

//     case 6:
//         document.write("Saturday");
//         break;

//     case 7:
//         document.write("Sunday");
//         break;

//     default:
//         document.write("Invalid day");
// }

// Input & Output

// Input: 3

// Output: Wednesday

// Input: 7

// Output: Sunday

// Input: 9

// Output: Invalid day

 
//   49. Get the month name based on the number

// let month = Number(prompt("Enter a month number (1-12):"));
// switch (month) {
//     case 1:
//         document.write("January");
//         break;

//     case 2:
//         document.write("February");
//         break;

//     case 3:
//         document.write("March");
//         break;

//     case 4:
//         document.write("April");
//         break;

//     case 5:
//         document.write("May");
//         break;

//     case 6:
//         document.write("June");
//         break;

//     case 7:
//         document.write("July");
//         break;

//     case 8:
//         document.write("August");
//         break;

//     case 9:
//         document.write("September");
//         break;

//     case 10:
//         document.write("October");
//         break;

//     case 11:
//         document.write("November");
//         break;

//     case 12:
//         document.write("December");
//         break;

//     default:
//         document.write("Invalid month");
// }

// Input & Output

// Input: 1

// Output: January

// Input: 6

// Output: June

// Input: 13

// Output: Invalid month


//   50. Check the grade based on marks range

// let marks = Number(prompt("Enter your marks:"));

// switch (true) {
//     case (marks >= 90 && marks <= 100):
//         document.write("Grade A");
//         break;

//     case (marks >= 80):
//         document.write("Grade B");
//         break;

//     case (marks >= 70):
//         document.write("Grade C");
//         break;

//     case (marks >= 40):
//         document.write("Grade D");
//         break;

//     case (marks >= 0 && marks < 40):
//         document.write("Fail");
//         break;

//     default:
//         document.write("Invalid Marks");
// }

// Input & Output

// Input: 92

// Output: Grade A

// Input: 76

// Output: Grade C

// Input: 35

// Output: Fail

//   51. Identify vehicle type based on category

// let vehicle = prompt("Enter vehicle type:");

// switch (vehicle) {
//     case "car":
//         document.write("4-Wheeler");
//         break;

//     case "bike":
//         document.write("2-Wheeler");
//         break;

//     case "bus":
//         document.write("Heavy Vehicle");
//         break;

//     default:
//         document.write("Invalid Vehicle");
// }

// Input: "car"

// Output: 4 - Wheeler

// Input: "bike"

// Output: 2 - Wheeler

// Input: "bus"

// Output: Heavy Vehicle

//   53. Get the currency symbol based on country

// let country = prompt("Enter country name:");

// switch (country) {
//     case "india":
//         document.write("₹");
//         break;

//     case "usa":
//         document.write("$");
//         break;

//     case "japan":
//         document.write("¥");
//         break;

//     default:
//         document.write("Invalid Country");
// }

// Input: "India"

// Output: ₹

// Input: "USA"

// Output: $

// Input: "Japan"

// Output: ¥


//   54. Identify a programming language category

// let language = prompt("Enter a programming language:");

// switch (language) {
//     case "c":
//         document.write("Procedural Language");
//         break;

//     case "python":
//         document.write("Scripting Language");
//         break;

//     case "java":
//         document.write("Object-Oriented Language");
//         break;

//     default:
//         document.write("Unknown Language");
// }

// Input: "C"

// Output: Procedural Language

// Input: "Python"

// Output: Scripting Language

// Input: "Java"

// Output: Object - Oriented Language


//   55. Check the traffic light signal meaning

// let signal = prompt("Enter traffic light color:");

// switch (signal) {
//     case "red":
//         document.write("Stop");
//         break;

//     case "yellow":
//         document.write("Ready");
//         break;

//     case "green":
//         document.write("Go");
//         break;

//     default:
//         document.write("Invalid Signal");
// }

// Input: "Red"

// Output: Stop

// Input: "Yellow"

// Output: Ready

// Input: "Green"

// Output: Go


//   56. Identify device category

// let device = prompt("Enter device name:");

// switch (device) {
//     case "laptop":
//         document.write("Computing Device");
//         break;

//     case "mobile":
//         document.write("Communication Device");
//         break;

//     case "tv":
//         document.write("Entertainment Device");
//         break;

//     default:
//         document.write("Unknown Device");
// }

// Input & Output

// Input: "Laptop"

// Output: Computing Device

// Input: "Mobile"

// Output: Communication Device

// Input: "TV"

// Output: Entertainment Device


//   57. Check if a person is eligible to vote.
// A person can vote only if they are at least 18 years old and have a valid voter ID.

// let age = Number(prompt("Enter your age:"));
// let voterId = prompt("Do you have a Voter ID? (Yes/No)").toLowerCase();

// if (age >= 18 && voterId === "yes") {
//     document.write("Eligible to vote");
// } else {
//     document.write("Not eligible to vote");
// }

// Input: Age: 20, Voter ID: Yes → Output: Eligible to vote

// Input: Age: 17, Voter ID: Yes → Output: Not eligible to vote


//   58. Check if a student passes the semester.
// A student will pass if their marks are 40 or above in all subjects and their attendance is at least 75 %.

// let marks = Number(prompt("Enter your marks:"));
// let attendance = Number(prompt("Enter your attendance percentage:"));

// if (marks >= 40 && attendance >= 75) {
//     document.write("Passed");
// } else if (marks >= 40 && attendance < 75) {
//     document.write("Failed due to low attendance");
// } else {
//     document.write("Failed");
// }

// Input: Marks: 50, Attendance: 80 % → Output: Passed

// Input: Marks: 50, Attendance: 70 % → Output: Failed due to low attendance


//   59. Check if a user can access a premium feature in an app.
// A user can access the premium feature only if they have an active subscription and their payment is up to date.

// let subscription = prompt("Enter Subscription (Active/Inactive)");
// let payment = prompt("Enter Payment Status (Up to Date/Pending)");

// switch (`${subscription}-${payment}`) {
//     case "Active-Up to Date":
//         document.write("Access granted");
//         break;

//     case "Active-Pending":
//     case "Inactive-Up to Date":
//     case "Inactive-Pending":
//         document.write("Access denied");
//         break;

//     default:
//         document.write("Invalid input");
// }

// Input: Subscription: Active, Payment: Up to Date → Output: Access granted
// Input: Subscription: Active, Payment: Pending → Output: Access denied


//   60. Check if a mobile phone can install an app.
// A phone can install an app if it has enough storage space and the operating system is updated.

// let storage = Number(prompt("Enter available storage (GB):"));
// let os = prompt("Enter OS Status (Updated/Not Updated)");

// switch (true) {
//     case (storage >= 5 && os === "Updated"):
//         document.write("Installation allowed");
//         break;

//     case (storage < 5 && os === "Updated"):
//         document.write("Installation not allowed due to low storage");
//         break;

//     case (storage >= 5 && os === "Not Updated"):
//         document.write("Installation not allowed due to outdated OS");
//         break;

//     case (storage < 5 && os === "Not Updated"):
//         document.write("Installation not allowed due to low storage and outdated OS");
//         break;

//     default:
//         document.write("Invalid input");
// }

// Input: Storage: 5GB available, OS: Updated → Output: Installation allowed
// Input: Storage: 1GB available, OS: Updated → Output: Installation not allowed due to low storage


//   61. Check if a car can be started.
// A car will start only if there is enough fuel and the battery is charged.

// let fuel = prompt("Enter Fuel Status (Full/Empty)");
// let battery = prompt("Enter Battery Status (Charged/Dead)");

// switch (true) {
//     case (fuel === "Full" && battery === "Charged"):
//         document.write("Car starts");
//         break;

//     case (fuel === "Full" && battery === "Dead"):
//         document.write("Car does not start due to dead battery");
//         break;

//     case (fuel === "Empty" && battery === "Charged"):
//         document.write("Car does not start due to no fuel");
//         break;

//     case (fuel === "Empty" && battery === "Dead"):
//         document.write("Car does not start due to no fuel and dead battery");
//         break;

//     default:
//         document.write("Invalid input");
// }

// Input: Fuel: Full, Battery: Charged → Output: Car starts
// Input: Fuel: Full, Battery: Dead → Output: Car does not start


//   62. Check if an online payment can be processed.
// An online payment will be processed only if the card is valid and there are sufficient funds in the account.

// let card = prompt("Enter Card Status (Valid/Expired)");
// let funds = prompt("Enter Funds Status (Sufficient/Insufficient)");

// switch (true) {
//     case (card === "Valid" && funds === "Sufficient"):
//         document.write("Payment successful");
//         break;

//     case (card === "Expired" && funds === "Sufficient"):
//         document.write("Payment failed due to expired card");
//         break;

//     case (card === "Valid" && funds === "Insufficient"):
//         document.write("Payment failed due to insufficient funds");
//         break;

//     case (card === "Expired" && funds === "Insufficient"):
//         document.write("Payment failed due to expired card and insufficient funds");
//         break;

//     default:
//         document.write("Invalid input");
// }

// Input: Card: Valid, Funds: Sufficient → Output: Payment successful
// Input: Card: Expired, Funds: Sufficient → Output: Payment failed


//   63. Check if a person can participate in a sports tournament.
// A person can participate if they have registered and cleared the medical checkup.

// let registered = prompt("Enter Registration Status (Yes/No)");
// let medical = prompt("Enter Medical Checkup Status (Yes/No)");

// switch (true) {
//     case (registered === "Yes" && medical === "Yes"):
//         document.write("Allowed to participate");
//         break;

//     case (registered === "Yes" && medical === "No"):
//         document.write("Not allowed to participate due to medical checkup");
//         break;

//     case (registered === "No" && medical === "Yes"):
//         document.write("Not allowed to participate due to no registration");
//         break;

//     case (registered === "No" && medical === "No"):
//         document.write("Not allowed to participate due to no registration and medical checkup not cleared");
//         break;

//     default:
//         document.write("Invalid input");
// }

// Input: Registered: Yes, Medical Cleared: Yes → Output: Allowed to participate
// Input: Registered: Yes, Medical Cleared: No → Output: Not allowed to participate


//   65. Check if a person can enter a club.
// A person can enter the club if they have a membership card or are invited by a club member.

// let membership = prompt("Enter Membership Status (Yes/No)");
// let invited = prompt("Enter Invitation Status (Yes/No)");

// switch (true) {
//     case (membership === "Yes" || invited === "Yes"):
//         document.write("Entry allowed");
//         break;

//     case (membership === "No" && invited === "No"):
//         document.write("Entry denied");
//         break;

//     default:
//         document.write("Invalid input");
// }

// Input: Membership: No, Invited: Yes → Output: Entry allowed
// Input: Membership: No, Invited: No → Output: Entry denied


//   66. Check if an email is marked as important.
// An email is marked as important if it is from the boss or has the subject "Urgent".

// let sender = prompt("Enter Sender (Boss/Employee)");
// let subject = prompt("Enter Subject (Urgent/Normal)");

// switch (true) {
//     case (sender === "Boss" || subject === "Urgent"):
//         document.write("Marked as important");
//         break;

//     case (sender === "Employee" && subject === "Normal"):
//         document.write("Not marked as important");
//         break;

//     default:
//         document.write("Invalid input");
// }

// Input: Sender: Boss, Subject: Normal → Output: Marked as important
// Input: Sender: Employee, Subject: Normal → Output: Not marked as important


//   67. Check if a student gets a discount on books.
// A student gets a discount if they show their student ID or if they buy books worth more than ₹1000.

// let studentID = prompt("Enter Student ID (Yes/No)");
// let purchase = Number(prompt("Enter Purchase Amount (₹)"));

// switch (true) {
//     case (studentID === "Yes" || purchase > 1000):
//         document.write("Discount applied");
//         break;

//     case (studentID === "No" && purchase <= 1000):
//         document.write("No discount");
//         break;

//     default:
//         document.write("Invalid input");
// }

// Input: Student ID: No, Purchase: ₹1200 → Output: Discount applied
// Input: Student ID: No, Purchase: ₹500 → Output: No discount


//   68. Check if a car gets free parking.
// A car gets free parking if it is an electric vehicle or the driver has a VIP pass.

// let carType = prompt("Enter Car Type (Electric/Petrol)");
// let vipPass = prompt("Enter VIP Pass (Yes/No)");

// switch (true) {
//     case (carType === "Electric" || vipPass === "Yes"):
//         document.write("Free parking");
//         break;

//     case (carType === "Petrol" && vipPass === "No"):
//         document.write("Parking fee required");
//         break;

//     default:
//         document.write("Invalid input");
// }

// Input: Car Type: Electric, VIP Pass: No → Output: Free parking
// Input: Car Type: Petrol, VIP Pass: No → Output: Parking fee required


//   69. Check if a person can board a flight.
// A person can board the flight if they have a boarding pass or a government travel permit.

// let boardingPass = prompt("Enter Boarding Pass (Yes/No)");
// let travelPermit = prompt("Enter Travel Permit (Yes/No)");

// switch (true) {
//     case (boardingPass === "Yes" || travelPermit === "Yes"):
//         document.write("Allowed to board");
//         break;

//     case (boardingPass === "No" && travelPermit === "No"):
//         document.write("Not allowed to board");
//         break;

//     default:
//         document.write("Invalid input");
// }

// Input: Boarding Pass: No, Travel Permit: Yes → Output: Allowed to board
// Input: Boarding Pass: No, Travel Permit: No → Output: Not allowed to board


//   70. Find the largest among three numbers(Using Nested If)
// A program should check which of the three numbers is the largest by using a nested if condition.

// let a = Number(prompt("Enter First Number:"));
// let b = Number(prompt("Enter Second Number:"));
// let c = Number(prompt("Enter Third Number:"));

// if (a >= b) {
//     if (a >= c) {
//         document.write("Largest number is " + a);
//     } else {
//         document.write("Largest number is " + c);
//     }
// } else {
//     if (b >= c) {
//         document.write("Largest number is " + b);
//     } else {
//         document.write("Largest number is " + c);
//     }
// }

// Input: a = 10, b = 20, c = 15

// Output: Largest number is 20

// Input: a = 25, b = 25, c = 10

// Output: Largest number is 25


//   71. Find the largest among three numbers(Using AND && Operator)
// A program should check which of the three numbers is the largestsss by ensuring that one number is greater than both the others using AND conditions.

// let a = Number(prompt("Enter First Number:"));
// let b = Number(prompt("Enter Second Number:"));
// let c = Number(prompt("Enter Third Number:"));

// if (a >= b && a >= c) {
//     document.write("Largest number is " + a);
// }
// else if (b >= a && b >= c) {
//     document.write("Largest number is " + b);
// }
// else if (c >= a && c >= b) {
//     document.write("Largest number is " + c);
// }
// else {
//     document.write("Invalid Input");
// }

// Input: a = 12, b = 8, c = 25

// Output: Largest number is 25

// Input: a = 50, b = 30, c = 50

// Output: Largest number is 50


//   72. Find the largest among four numbers(Using Nested If)
// A program should check which of the four numbers is the largest by comparing them using nested if statements.

// let a = Number(prompt("Enter First Number:"));
// let b = Number(prompt("Enter Second Number:"));
// let c = Number(prompt("Enter Third Number:"));
// let d = Number(prompt("Enter Fourth Number:"));

// if (a >= b) {
//     if (a >= c) {
//         if (a >= d) {
//             document.write("Largest number is " + a);
//         } else {
//             document.write("Largest number is " + d);
//         }
//     } else {
//         if (c >= d) {
//             document.write("Largest number is " + c);
//         } else {
//             document.write("Largest number is " + d);
//         }
//     }
// } else {
//     if (b >= c) {
//         if (b >= d) {
//             document.write("Largest number is " + b);
//         } else {
//             document.write("Largest number is " + d);
//         }
//     } else {
//         if (c >= d) {
//             document.write("Largest number is " + c);
//         } else {
//             document.write("Largest number is " + d);
//         }
//     }
// }

// Input: a = 30, b = 50, c = 20, d = 10

// Output: Largest number is 50

// Input: a = 100, b = 99, c = 100, d = 100

// Output: Largest number is 100


//   73. Find the largest among four numbers
// A program should check if any one of the four numbers is greater than the others by using && conditions.

// let a = Number(prompt("Enter First Number:"));
// let b = Number(prompt("Enter Second Number:"));
// let c = Number(prompt("Enter Third Number:"));
// let d = Number(prompt("Enter Fourth Number:"));

// if (a >= b && a >= c && a >= d) {
//     document.write("Largest number is " + a);
// }
// else if (b >= a && b >= c && b >= d) {
//     document.write("Largest number is " + b);
// }
// else if (c >= a && c >= b && c >= d) {
//     document.write("Largest number is " + c);
// }
// else if (d >= a && d >= b && d >= c) {
//     document.write("Largest number is " + d);
// }
// else {
//     document.write("Invalid Input");
// }

// Input: a = 15, b = 45, c = 25, d = 35

// Output: Largest number is 45

// Input: a = 90, b = 75, c = 80, d = 90

// Output: Largest number is 90


//   74. Electricity Bill Calculation 
// A program should calculate the electricity bill based on the following conditions:-
// If the electricity consumption is less than or equal to 100 units, the charge is ₹5 per unit. 
// If the consumption is between 101 and 300 units, the charge is ₹7 per unit for units above 100 and ₹5 per unit for the first 100 units. 
// If the consumption is above 300 units, the charge is ₹10 per unit for units above 300, ₹7 per unit for the next 200 units, and ₹5 per unit for the first 100 units.

let units = parseInt(prompt("Enter Electricity Consumption (in units):"));
let bill = 0;

if (units <= 100) {
    bill = units * 5;
}
else if (units <= 300) {
    bill = (100 * 5) + ((units - 100) * 7);
}
else {
    bill = (100 * 5) + (200 * 7) + ((units - 300) * 10);
}

document.write("Electricity Consumption: " + units + " units<br>");
document.write("Total Bill: ₹" + bill);

// Example :

// Input: Electricity Consumption: 80 units

// Output: Total Bill: ₹400(80 × ₹5) 


//   75. Student Grade Calculation
// A program hould determine a student's grade based on their percentage score:
// 90 % and above → Grade A
// 80 % - 89 % → Grade B
// 70 % - 79 % → Grade C
// 60 % - 69 % → Grade D
// Below 60 % → Grade F

// let marks = Number(prompt("Enter Percentage Marks:"));

// if (marks >= 90 && marks <= 100) {
//     document.write("Grade: A");
// }
// else if (marks >= 80 && marks < 90) {
//     document.write("Grade: B");
// }
// else if (marks >= 70 && marks < 80) {
//     document.write("Grade: C");
// }
// else if (marks >= 60 && marks < 70) {
//     document.write("Grade: D");
// }
// else if (marks >= 0 && marks < 60) {
//     document.write("Grade: F");
// }
// else {
//     document.write("Invalid Marks");
// }

// Example 1:

// Input: Marks: 92 %
//     Output: Grade: A
 
// Example 2:

// Input: Marks: 75 %
//     Outpu  t: Grade: C