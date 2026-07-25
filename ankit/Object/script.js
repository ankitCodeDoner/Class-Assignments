
// 1.Create an object named student with the following properties:
// name, age, course, city
// Print the complete object.
    // let student = {
    //     name: "Ankit",
    //     age: 21,
    //     course: "BCA 3rd",
    //     city: "Hisar"
    // };
    // console.log(student);

// 2.Access and print:
// student's name
// student's city
    // console.log(student.name);
    // console.log(student.city);

// 3.Update the student's age.
    // student.age = 25;
    // console.log(student.age);

// 4.Add a new property called email.
    // student.email = "ankit32@gmail.com";
    // console.log(student.email);

// 5.Delete the city property.
    // console.log(delete student.city);

// 6.Check whether the object contains the property course.
// (Hint: in operator)
    // console.log("course" in student);

// 7.Count how many properties are present in an object.
// (Hint: Object.keys())
    // console.log(Object.keys(student));   

// 8.Loop through all the properties using for...in.
    // for (let key in student) {
    //     console.log(key, student[key]);
    // }

// 9.Print only the values of an object.
// (Hint: Object.values())
    // console.log(Object.values(student));

// 10.Print both keys and values.
// (Hint: Object.entries())
    // console.log(Object.entries(student));

// Intermediate Level
// 11.Create an object representing a mobile phone with:
// brand
// model
// price
// storage
// Update the price by increasing it by 10%.
    // const mobile = {
    //     Brand: "Oneplus",
    //     Model: "Nord CE-2",
    //     Price: 25000,
    //     Storage: "128 GB"
    // };
    // mobile.Price = 25000 + (mobile.Price/10);
    // console.log(mobile.Price);
// 12.Create an object with nested objects.
// Example:
// employee
//     address
//         city
//         state
// Access the nested properties.
    // const employee = {
    //     address:{
    //         city: "Hisar",
    //         state: "Haryana"
    //     }
    // };
    // console.log(employee.address.city);
    // console.log(employee.address.state);

// 13.Create an object containing an array.
// Example:
// student
// subjects:[]
// Print each subject.
    
// 14.Merge two objects using the spread operator.
// 15.Clone an object using the spread operator.
// Modify the cloned object and verify the original remains unchanged.
// 16.Freeze an object using Object.freeze().
// Try changing one of its properties.
// Observe what happens.
// 17.Seal an object using Object.seal().
// Try:
// adding a property
// deleting a property
// updating an existing property
// 18.Prevent extensions using Object.preventExtensions().
// Try adding a new property.
// 19.Check whether an object is:
// Frozen
// Sealed
// Extensible
// (Hint:
// Object.isFrozen()
// Object.isSealed()
// Object.isExtensible())
// 20.Create two objects and assign properties from one to another using:
// Object.assign()
// Advanced Level
// 21.Use object destructuring to extract:
// name
// age
// city
// from a student object.
// 22.Rename variables while destructuring.
// Example:
// name → studentName
// 23.Use nested destructuring.
// 24.Use default values while destructuring.
// 25.Convert an object into an array using:
// Object.entries()
// Loop through the result.
// 26.Convert an array of key-value pairs back into an object.
// (Hint: Object.fromEntries())
// 27.Sort an object's keys alphabetically.
// (Hint:
// Object.keys()
// sort())
// 28.Write a function that receives an object and prints:
// Total number of keys
// Total number of values
// 29.Create an object with methods.
// Example:
// person
//     greet()
//     introduce()
// Call both methods.
// 30. Mini Project
// Create a Library Management Object.
// Each book should contain:
// title
// author
// price
// available
// Perform the following operations:
// Add a new book
// Delete a book
// Update book price
// Print all books
// Find available books
// Count total books
// Convert books into key-value pairs using Object.entries()
// Clone the library
// Freeze one book object
// Merge another library object into it