import './styles/main.css'

import {maxNumber} from './hw_functios/hw1'
import {getSum} from './hw_functios/hw2'
import {getRandomNumber} from './hw_functios/hw3'
import {getPairs} from './hw_functios/hw4'
import {filterEvenNumbers} from './hw_functios/hw5'
import {getSubject} from './hw_functios/hw6'
import {getMySalary} from './hw_functios/hw7'
import {Student} from './hw_functios/hw8'
import {generateBlocks} from './hw_functios/hw9'
import {getRandomChinese} from './hw_functios/hw11'


let maxDigit = maxNumber(15 , 123 , 90);
document.querySelector('#hw1').textContent =  `Homerwork 1; Max number : ${maxDigit}`;
// -----------------------------------------------------------------------------

let sum = getSum(false, 10, 12);
document.querySelector('#hw2').textContent =  `Homerwork 2; Sum : ${sum} `;
// -----------------------------------------------------------------------------

let randomNumber = getRandomNumber(1 , 10);
document.querySelector('#hw3').textContent = `Homerwork 3; Random number : ${randomNumber} `;
// -----------------------------------------------------------------------------

let studentsPais = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]
let pairs = getPairs(studentsPais);
document.querySelector('#hw4').textContent = `Homerwork 4 :Pairs of student: ${pairs}`;
// -----------------------------------------------------------------------------

let evenNumbers = filterEvenNumbers(1, 2, 3, 4, 5, 6);
document.querySelector('#hw5').textContent = `Homerwork 5; Even numbers  : ${evenNumbers}`


const students = [
    {
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}]

let subj = getSubject(students[0])
document.querySelector('#hw6').textContent = `Homerwork 6; Uppercase subject  : ${subj}`;
// -----------------------------------------------------------------------------

const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 ,
};
getMySalary(ukraine)
document.querySelector('#hw7').textContent = `Homerwork 7; My salary  :output in console`;
// -----------------------------------------------------------------------------

let student1 = new Student ('Cursor' , '3' , 'Tupis Rostyslav Romanovich')
let studentInfo = student1.getInfo();
document.querySelector('#hw8').textContent = `Homerwork 8; Student  : ${studentInfo}`;
// -----------------------------------------------------------------------------

let block = generateBlocks()
document.querySelector('#hw9').textContent = `Homerwork 9:`;
// -----------------------------------------------------------------------------

let signs = getRandomChinese(5)
document.querySelector('#hw11').textContent = `Homerwork 11;output in console`;
// -----------------------------------------------------------------------------



