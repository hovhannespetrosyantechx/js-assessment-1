// Main data
const firstName = "Hovhannes";
const lastName = "Petrosyan";
const birthYear = 2003;
let currentYear = 2026;
let isStudent = true;
const hobbies = ['guitar', 'books', 'gaming'];
const contact = {email: 'hovhannes.petrosyan.techx@gmail.com', phone:'+37496303461', city:'Yerevan'};

// Intro
console.log(`Hi, my name is ${firstName} ${lastName}. I live in ${contact.city}.`);
console.log(`I am ${currentYear - birthYear} years old and currently ${isStudent ? "a student" : "not a student"}.`);

// Type Coercion & Comparison
let ageString = '25';
let ageNumber = 25;

console.log(`${ageString == ageNumber}, ${ageString === ageNumber}`);
console.log(`ageString is ${typeof ageString} , ageNumer is ${typeof ageNumber}`);

// Print grade
let score = 42;
let grade;
if (score >= 90 && score <= 100){
    grade = 'A';
    console.log('A');
}
else if(score >= 80 && score <= 89){
    grade = 'B';
    console.log('B');
}
else if(score >= 70 && score <= 79){
    grade = 'C';
    console.log('C');
}
else if(score >= 60 && score <= 69){
    grade = 'D';
    console.log('D');
}
else {
    grade = 'F';
    console.log('F');
}

// Feedback
switch(grade) {
    case 'A':
        console.log('Excellent work!');
        break;
    case 'B':
        console.log('Good job!');
        break;
    case 'C':
        console.log('Keep improving.');
        break;
    case 'D':
        console.log('Try harder.');
        break;
    default:
        console.log('Needs serious effort.');
}

// Pass or fail mesaage
console.log(score >= 70 ? 'You passed' : 'You failed');

