// // Function consructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

/*
var Person = function(name, yearOfBirth, job) {
   this.name = name;
   this.yearOfBirth = yearOfBirth;
   this.job = job;
}

Person.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
}

// Person.prototype.lastName = 'Smith';

// create new object using constructor function
var john = new Person('John', 1990, 'teacher'); // instance of Person object
var jane = new Person('Jane', 1969, 'designer'); // instance of Person object
var mark = new Person('Mark', 1948, 'retired'); // instance of Person object

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

*/

/*
// Primitives
let a = 23;
let b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
let obj1 = {
    name: 'John',
    age: 27
};

let obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

// Funcitons
let age = 27;
let obj = {
    name: 'Alekasandar',
    city: 'Varna'
};

function change(a, b) {
    a = 30;
    b.city = 'Sofia'
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

/*
let years = [1990, 1965, 1937, 2005, 1997];

function arrayCalc(arr, fn) {
    let arrRes = [];
    for(let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1
    }
}

let ages = arrayCalc(years, calculateAge);
let fullAges = arrayCalc(ages, isFullAge);
let rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

/* 
function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(`${name}, can you please explain what UX design is ?`);
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(`What subject do you teach, ${name} ?`)
        }
    } else {
        return function (name) {
            console.log(`Hello, ${name}, what do you do ?`);
        }
    }
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Jim');
*/


/*
function retirement(retirementAge) {

    let a = ' years left until retirement.';
    
    return function (yearOfBirth) {
        let age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

let retirementUS = retirement(66);
let retirementDE = retirement(65);
let retirementIceland = retirement(67);

retirementDE(1990)
retirementUS(1990);
retirementIceland(1990);



function interviewQuestion(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(`${name}, can you please explain what UX design is ?`);
        } else  if(job === 'teacher') {
            console.log(`What subject do you teach, ${name} ?`)
        } else {
            console.log(`Hello, ${name}, what do you do ?`);
        }
    }
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Jim');

// retirement(66)(1990);
*/


// let john = {
//     name: 'John',
//     age: 27,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if(style === 'formal') {
//             console.log('Good ' + timeOfDay + " Ladies and gentlemen! I\'m " + this.name + ", I\'m a " + this. job +  this.age );
//         } else if ( style === 'fiendly') {
//             console.log('Hi' + " I am " + this.name + ", I\'m a " + this.job + this.age + "Have a nice " + timeOfDay);
//         }
//     }
// }

// let emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// }

// john.presentation('formal', 'morning');
// john.presentation.call(emily);


// (function() {
//     let Question = function (question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     }

//     Question.prototype.displayQuestion = function () {
//         console.log(this.question);
//         for (let i = 0; i < this.answers.length; i++) {
//             console.log(i + ':' + this.answers[i]);
//         }
//     }

//     Question.prototype.checkAnswer = function (ans) {
//         if (ans === this.correct) {
//             console.log('Correct answer!')
//         } else {
//             console.log('Wrong answer !')
//         }
//     }

//     // create new object using constructor function
//     let questionOne = new Question('Is JS the coolest programming language in the world ?', ['Yes', 'No'], 0);
//     let questionTwo = new Question('What is the name of this course\'s teacher ?', ['John', 'Michael', 'Jonas'], 2);
//     let questionThree = new Question('What does best describe coding', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
    
//     let questions = [questionOne, questionTwo, questionThree];
    
//     function nextQuestion () {
        

//         let n = Math.floor(Math.random() * questions.length);

//         questions[n].displayQuestion();

//         let answer = + prompt('Please, select the correct answer.')
//         questions[n].checkAnswer(answer);

//         if(answer !== 'exit') {
//             questions[n].checkAnswer(+answer);
            
//             nextQuestion();
//         }


//     }

//     nextQuestion();
// })();


function getIndexToIns(arr, num) {
    arr.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num)
            return i;
    }

    return arr.length
}

getIndexToIns([10, 20, 30, 40, 50], 35)