
// 1.Create an object named student with the following properties:
// name, age, course, city
// Print the complete object.
    let student = {
        name: "Ankit",
        age: 21,
        course: "BCA 3rd",
        city: "Hisar"
    };
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
    // let student1 = {
    //     name: "Ashif",
    //     subjects: ["Math", "English", "Computer", "Science"]
    // };
    // student1.subjects.forEach(function(subject){
    //     console.log(subject);
    // });
    
// 14.Merge two objects using the spread operator.
    // let student1 = {
    //     name: "Ankit",
    //     age: 20
    // };
    // let marks = {
    //     math: 95,
    //     english: 88
    // };
    // let result = {
    //     ...student1,
    //     ...marks
    // };
    // console.log(result);

// 15.Clone an object using the spread operator.
// Modify the cloned object and verify the original remains unchanged.
    // use upper student object 
    // let cloneStudent ={
    //     ...student
    // };
    // cloneStudent.age = 25;
    // console.log(student);
    // console.log(cloneStudent);

// 16.Freeze an object using Object.freeze().
// Try changing one of its properties.
// Observe what happens.
    // Object.freeze(student);
    // student.age = 24;
    // console.log(student);

// 17.Seal an object using Object.seal().
// Try:
// adding a property
// deleting a property
// updating an existing property
    // Object.seal(student);
    // student.roll = 12;
    // delete student.city;
    // student.name = "Ashif";
    // console.log(student);

// 18.Prevent extensions using Object.preventExtensions().
// Try adding a new property.
    // Object.preventExtensions(student);
    // student.roll = 12;
    // console.log(student);

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
    // const obj1 ={
    //     name: "Ankit",
    //     mobile: 99923434287
    // }
    // const obj2 = {
    //     class: "BCA 3rd",
    //     Roll: 12,
    // };
    // console.log(Object.assign(obj1, obj2));

// Advanced Level
// 21.Use object destructuring to extract:
// name
// age
// city
// from a student object.
    // let { name, age, city } = student;
    // console.log("Name :", name);
    // console.log("Age :", age);
    // console.log("City :", city);

// 22.Rename variables while destructuring.
// Example:
// name → studentName
    // let {
    //     name: studentName,
    //     age: studentAge,
    //     city: studentCity
    // } = student;
    // console.log(studentName);
    // console.log(studentAge);
    // console.log(studentCity);

// 23.Use nested destructuring.
    // let obj1 = {
    //     name: "Mohit",
    //     Age: 20,
    //     address: {
    //         city: "Hisar",
    //         state: "Haryana"
    //     }
    // };
    // let {
    //     name, 
    //     address: { city, state }
    // } = obj1;
    // console.log("Name :", name);
    // console.log("City :", city);
    // console.log("State :", state);

// 24.Use default values while destructuring.
    // let obj = {
    //     employeeName: "Nishu",
    //     age: 21
    // };
    // let {
    //     employeeName,
    //     age,
    //     city = "Kathal"
    // } = obj;
    // console.log(employeeName);
    // console.log(age);
    // console.log(city);

// 25.Convert an object into an array using:
// Object.entries()
// Loop through the result.
    // let entries = Object.entries(student);
    // console.log(entries);
    // for (let [key, value] of entries) {
    //     console.log(key + " : " + value);
    // }

// 26.Convert an array of key-value pairs back into an object.
// (Hint: Object.fromEntries())
    // let arr = [
    //     ["name", "Nishu"],
    //     ["age", "20"],
    //     ["course", "BCA"],
    //     ["city", "Hisar"]
    // ];
    // let obj = Object.fromEntries(arr);
    // console.log(obj);

// 27.Sort an object's keys alphabetically.
// (Hint:
// Object.keys()
// sort())
    // console.log(Object.keys(student).sort());

// 28.Write a function that receives an object and prints:
// Total number of keys
// Total number of values
    // function countObject(obj) {
    //     console.log("Total Keys :", Object.keys(obj).length);
    //     console.log("Total Values :", Object.values(obj).length);
    // }
    // countObject(student);

// 29.Create an object with methods.
// Example:
// person
//     greet()
//     introduce()
// Call both methods.
    // let person = {
    //     name: "Ankit",
    //     greet: function () {
    //         console.log("Hello!");
    //     },
    //     introduce: function () {
    //         console.log("My name is " + this.name);
    //     }
    // };
    
    // person.greet();
    // person.introduce();

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