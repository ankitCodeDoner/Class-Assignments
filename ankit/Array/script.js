//             <-- Practice Programs -->
// Program 1
// Create an array of five student names and print all names.
    // let student = ["Ankit", "Ashif", "Mandeep", "Nishu", "Vijay"];
    // console.log(student);

// Program 2
// Create an array of five numbers and print the first and last number.
    // let numbers = [1, 2, 4, 5, 7];
    // console.log(numbers[0]);
    // console.log(numbers.length-1);

// Program 3
// Replace the second fruit with "Orange".
    // let fruits = ["Banana", "papaya", "Apple", "Mango"];
    // console.log(fruits);
    // fruits[1]="Orange";
    // console.log(fruits);

// Program 4
// Add "Pineapple" at the end using push().
    // let fruits = ["Banana", "papaya", "Apple", "Mango"];
    // console.log(fruits);
    // fruits.push("Pineapple");
    // console.log(fruits);

// Program 5
// Remove the last element using pop().
    // let numbers =[1,2,3,4,5,6];
    // console.log(numbers);
    // numbers.pop();
    // console.log(numbers);
// Program 6
// Add "Delhi" at the beginning using unshift().
    // let cities = ["Hisar", "Jaipur", "Chandigarh","Sirsa"];
    // console.log(cities);
    // cities.unshift("Delhi");
    // console.log(cities);

// Program 7
// Remove the first element using shift().
    // let cities = ["Sirsa","Hisar","Jaipur","Chandigarh"];
    // console.log(cities);
    // cities.shift();
    // console.log(cities);

// Program 8
// Print all elements using a for loop.
    // let numbers = [1,2,3,4,5,6,7,8];
    // for(let i=0; i<numbers.length;i++){
    //     console.log(numbers[i]);
    // }

// Program 9
// Print all elements using a for...of loop.
    // let names = ["Ankit", "Ashif", "Mohit", "Nishu", "Mandeep", "Robin"];
    // for (const element of names) {
    //     console.log(element);
    // }

// Program 10
// Print the total number of elements using the length property.>
    // let names = ["Ankit", "Ashif", "Mohit", "Nishu", "Mandeep", "Robin"];
    // console.log(names.length);

//                <-- Array Methods -->
// 1. Array toString() Method => The toString() method returns the elements of an array as a comma separated string.

    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // let myList = fruits.toString();
    // console.log(myList);

// 2. Array at() Method => The at() method returns an indexed element from an array.
// The at() method returns the same as [].
    // let names = ["AJ", "MP", "AK", "NP", "VK"];
    // let name = names.at(3);
    // console.log(name);

// 3. Array join() Method => The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
    // let cities = ["Hisar", "Jaipur", "Chandigarh","Sirsa"];
    // console.log(cities.join(" & "));

// 4. Array concat() Method => The concat() method creates a new array by merging (concatenating) existing arrays:
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.

    // const myGirls = ["Cecilie", "Lone"];
    // const myBoys = ["Emil", "Tobias", "Linus"];

    // const myChildren = myGirls.concat(myBoys);
    // console.log(myChildren);

// 5. Array copyWithin() Method => The copyWithin() method copies array elements to another position in an array:
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
// The copyWithin() method does not change the length of the array.

// Copy to index 2, all elements from index 0:
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits.copyWithin(2, 0));

// 6. Array flat() Method => The flat() method creates a new array with sub-array elements concatenated to a specified depth.
    // const myArr = [[1,2],[3,4],[5,6]];
    // const newArr = myArr.flat();
    // console.log(newArr);

// 7. Array flatMap() => The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
    // const myArr = [1, 2, 3, 4, 5, 6, 7];
    // const newArr = myArr.flatMap(x => [x, x * 10]);
    // console.log(newArr);

// 8. Array slice() Method => The slice() method slices out a piece of an array into a new array:
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
    // const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    // console.log(fruits.slice(1));
    // console.log(fruits.slice(1,3));

// 9. Array splice() Method => The splice() method can be used to add new items to an array:
// The splice() method can be used to add new items to an array:
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.splice(1, 0, "Lemon", "Kiwi");  // 1st index to add item and 0 is delete 0 item in this array
    // console.log(fruits);

// 10. Array toSpliced() => The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
    // const months = ["Jan", "Feb", "Mar", "Apr"];
    // const spliced = months.toSpliced(0, 1);
    // console.log(months);
    // console.log(spliced);


//            <-- Assignment -->

// 1. Create an array of 10 numbers and print all elements using a loop.
    // let numbers =[1,2,12,12,32, 23, 323, 5, 3, 7];
    // for(let i=0; i<numbers.length; i++){
    //     console.log(numbers[i]);
    // }

// 2. Create an array of 5 fruits and print the first and last element.
    // const fruits = ["Apple", "Banana", "Kiwi", "Mango", "Orange"];
    // console.log(fruits[0]);
    // console.log(fruits[fruits.length-1]);
    
// 3. Add a new fruit at the end of the array using push().
    // const fruits = ["Apple", "Banana", "Kiwi", "Mango", "Orange"];
    // fruits.push("Pineapple");
    // console.log(fruits);
    
// 4. Remove the last element using pop().
    // const fruits = ["Apple", "Banana", "Kiwi", "Mango", "Orange"];
    // fruits.pop();
    // console.log(fruits);

// 5. Add a new element at the beginning using unshift().
    // const numbers = [1,2,3,4,5];
    // numbers.unshift(6);
    // console.log(numbers);
    
// 6. Remove the first element using shift().
    // const numbers = [1,2,3,4,5,6,];
    // numbers.shift();
    // console.log(numbers);

// 7. Find the index of "Apple" using indexOf().
    // const fruits = ["Apple", "Banana", "Kiwi", "Mango", "Orange"];
    // console.log(fruits.indexOf("Apple"));

// 8. Check whether "Mango" exists in the array using includes().
    // const fruits = ["Apple", "Banana", "Kiwi", "Mango", "Orange"];
    // console.log(fruits.includes("Mango"));

// 9. Reverse an array using reverse().
    // const numbers = [10, 20, 30, 40, 50,];
    // console.log(numbers.reverse());

// 10. Sort an array of numbers in ascending order using sort().
    // const numbers = [23, 21, 12, 43, 69, 89, 11, 5];
    // console.log(numbers.sort((a,b)=>a-b));

// 11. Create an array of numbers and return only even numbers using filter().
    // const numbers = [1, 2, 3, 34, 5,7,9,10];
    // const even = numbers.filter((numbers)=>{
    //     return numbers % 2 == 0;
    // });
    // console.log(even);

// 12. Return only odd numbers using filter().
    // const numbers = [1,2, 3, 4, 5,6,7,9, 32, 43 ];
    // const odd = numbers.filter((numbers)=>{
    //     return numbers % 2 != 0;
    // });
    // console.log(odd);

// Create an array of student names and convert all names to uppercase using map().
    // const student = ["Ankit", "Ashif", "Mohit", "Nishu", "Mandeep"];
    // const upper = student.map((student)=>{
    //     return student.toUpperCase();
    // });
    // console.log(upper);

// Convert an array of numbers into their squares using map().
    // const numbers = [1,2,3,4,5,6,7,8];
    // const square = numbers.map((numbers)=>{
    //     return numbers * numbers;
    // });
    // console.log(square);

// Find the first number greater than 50 using find().
    // const numbers = [3, 5, 6, 9, 10, 20, 34, 54, 32,67];
    // console.log(numbers.find(numbers=>numbers>50));

// Find the index of the first number greater than 100 using findIndex().
    // const numbers = [20, 30, 49, 58, 70, 120, 140, 200];
    // const result = numbers.findIndex((numbers)=>{
    //     return numbers>100;
    // });
    // console.log(result);

// Check if all numbers are positive using every().
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // console.log(numbers.every((numbers)=>{
    //     return numbers > 0;
    // }));

// Check if at least one number is negative using some().
    // const numbers = [1, -2, 3, 4, 5, 6, 7, -8, 9, 10];
    // console.log(numbers.some((numbers)=>{
    //     return numbers<0;
    // }));

// Calculate the sum of all numbers using reduce().
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const sum = numbers.reduce((pre, curt)=>{
    //     return pre + curt;
    // });
    // console.log(sum);

// Calculate the product of all numbers using reduce().
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const product = numbers.reduce((pre, curt)=>{
    //     return pre*curt;
    // });
    // console.log(product);

// Merge two arrays using concat().
    // const arr1 = ["Ankit", "Ashif", "Mohit", "Nishu"];
    // const arr2 = ["Mandeep", "Robin", "Vijay", "Nakul"];
    // console.log(arr1.concat(arr2));

// Extract elements from index 2 to index 5 using slice().
    // const numbers = [10, 30, 50, 70, 90, 110, 130];
    // console.log(numbers.slice(2,5));

// Remove 3 elements from the middle of an array using splice().
    // const numbers = [10, 20, 30];
    // console.log(numbers.splice(1,1));

// Insert "JavaScript" and "React" at index 2 using splice().
    const arr = ["C", "Java", "Python", "HTML"];
    const result=arr.splice(2,0,"JavaScript","React");
    console.log(result);

