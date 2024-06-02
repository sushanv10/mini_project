// 1. Promises
// Create a function fetchData that simulates fetching data from an API. The function should return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object  should represent a user with properties id, name, and age.

function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(() =>{
            const user=[
                {id:1, name:"Nikita", age:22},
                {id:2, name:"Sushan", age:21},
                {id:3, name:"Trixie", age:5}
            ];
            resolve(user);
        },2000);
    });
}

fetchData()
.then((user)=>{
    console.log(user);
}).catch((error)=>{
    console.error(error);
});




// 2. Closures
// Create a function createCounter that returns an object with two methods: increment and getCount. The increment method should increase the internal count by 1, and the getCount method should return the current count. Use a closure to maintain the internal count variable. 
function createCounter() {
    let count = 0;
    
    return {
        increment: function() {
            count += 1; 
        },
        getCount: function() {
            return count; 
        }
    };
}

const counter = createCounter();
console.log(counter.getCount()); 
counter.increment();
console.log(counter.getCount()); 
counter.increment();
console.log(counter.getCount()); 


// 3. Callbacks
// Create a function processData that accepts an array of numbers and a callback function. The function should process each number in the array using the callback function and return a new array of processed numbers.

function processData(numbers, callback) {
  return numbers.map(callback);
}

function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

let originalArray = [1, 2, 3, 4, 5];

let doubleArray = processData(originalArray, double);
console.log(doubleArray); 
const squaredArray = processData(originalArray, square);
console.log(squaredArray);

// 4. Async/Await
// Rewrite the fetchData function from Question 1 using async and await.
function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(() =>{
            const user=[
                {id:1, name:"Nikita", age:22},
                {id:2, name:"Sushan", age:21},
                {id:3, name:"Trixie", age:5}
            ];
            resolve(user);
        },2000);
    });
}
async function getData(){
    const user=await fetchData();
    console.log(user);
}
getData();

// 5. Array Manipulation: Map
// Given an array of numbers, create a function that doubles each number using map.
function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
}


const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numbers);
console.log(doubledNumbers);

// 6. Array Manipulation: Filter
// Given an array of numbers, create a function that filters out numbers less than 10 using filter.
function filters(arrNum){
    return arrNum.filter(number => number<10);
}
const arrNum=[1,2,4,8,10,12,14,16];
const filterNum= filters(arrNum);
console.log(filterNum);

// 7. Array Manipulation: Find
// Given an array of numbers, create a function that finds the first number greater than 15 using find

function find(arr){
    return arr.find(number =>number>15);
}
const arr=[4,6,8,12,14,15,20,23,35];
const findNum= find(arr);
console.log(findNum);

// 8. Array Manipulation: Reduce
// Given an array of numbers, create a function that sums all numbers using reduce.
function sumNumbers(num) {
    return num.reduce((total, number) => total + number, 0);
}
const num = [1, 2, 3, 4, 5];
const sum = sumNumbers(num);
console.log(sum);


// 9. Object Manipulation
// Given an array of user objects, write a function to transform this array into an object where the keys are user IDs and the values are the corresponding user objects.
function arrayToObject(users) {
    return users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
}

const users = [
    { id: 1, name: "Nikita", age: 22 },
    { id: 2, name: "Sushan", age: 21 },
    { id: 3, name: "Trixie", age: 5 }
];

const usersObject = arrayToObject(users);
console.log(usersObject);


// 10. Classes and Objects
// Create a Person class with a constructor that accepts name and age parameters. Add a method describe that returns a string describing the person.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person('Alice', 28);
console.log(person1.describe()); 

const person2 = new Person('Bob', 32);
console.log(person2.describe()); 



// 11. Inheritance
// Create a Student class that extends Person and adds a grade property. Add a method study that returns a string indicating the student is studying.
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person1 {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        return `${this.name} is studying.`;
    }
}

const student1 = new Student('Charlie', 20, 'A');
console.log(student1.describe()); 
console.log(student1.study()); 
console.log(student1.grade); 


// 12. Error Handling with Promises
// Modify the fetchData function to randomly reject the promise with an error message &quot;Failed to fetch data&quot;. Handle this error using .catch when calling the function.

function fetchData() {
    return new Promise((resolve, reject) => {
        const shouldFail = Math.random() > 0.5; 
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Failed to fetch data"));
            } else {
                resolve("Data fetched successfully");
            }
        }, 1000);
    });
}

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error.message)); 



// 13. Error Handling with Async/Await
// Modify the fetchData function with async/await to handle errors using try/catch blocks.

async function fetchData() {
    const shouldFail = Math.random() > 0.5; 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Failed to fetch data"));
            } else {
                resolve("Data fetched successfully");
            }
        }, 1000);
    });
}


async function getData() {
    try {
        const data = await fetchData();
        console.log(data); 
    } catch (error) {
        console.error(error.message); 
    }
}

getData();


// 14. Complex Array Manipulation
// Given an array of users, where each user has a name and an array of hobbies, create a function that returns an array of all unique hobbies using reduce.
function getUniqueHobbies(usersArray) {
    return usersArray.reduce((acc, user) => {
        if (Array.isArray(user.hobbies)) {
            user.hobbies.forEach(hobby => {
                if (!acc.includes(hobby)) {
                    acc.push(hobby);
                }
            });
        }
        return acc;
    }, []);
}

// Example usage:
const usersExample = [
    { name: 'Alice', hobbies: ['Reading', 'Swimming'] },
    { name: 'Bob', hobbies: ['Cycling', 'Reading'] },
    { name: 'Charlie', hobbies: ['Swimming', 'Running'] },
    { name: 'Dave' } 
];

const uniqueHobbies = getUniqueHobbies(usersExample);
console.log(uniqueHobbies); 
