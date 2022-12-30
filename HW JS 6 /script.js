const students = [
    {
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
    }, 
    {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
    }, 
    {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
    }
];

//Function 1 -----------------------------------------------------------------------
function getSubject (student) {
    let subjesctsUpperCase = [];

    for (let subj of Object.keys(student.subjects)){ // Object.keys дістаємо назву ключа 

        subj = subj.charAt(0).toUpperCase() + subj.slice(1);
        subj = subj.replace("_" , " ");
        subjesctsUpperCase.push(subj);

    }
    return subjesctsUpperCase ; 
}
console.log(getSubject(students[0]));

//Function 2-----------------------------------------------------------------------

function getAvarageMark (student){
    let sum = 0 ; 
    let markLength = 0 ; 

    for ( let marks of Object.values(student.subjects)){ // виводимо список масивів з усіма оцінками (три масиви )
        for (let mark of marks){ // проходимося по значеннях масиву з кожного предмету 
            sum = sum + mark ; 
            markLength += 1 ; 
        }
    }  
    return (sum / markLength).toFixed(2) ; 
}
console.log(getAvarageMark(students[0]));

//Function 3-----------------------------------------------------------------------

function getStudentInfo (student){
    let studentInfo = {};

    studentInfo["course"] = student.course //пушимо в обєкт , в [назва ключа] = значення ключа
    studentInfo["name"] = student.name
    studentInfo["averageMark"] = getAvarageMark(student);
    return studentInfo ; 
}
console.log(getStudentInfo(students[0]));

//Function 4-----------------------------------------------------------------------
function getStudentsName (students){
    let studentNames = [] ; 

    for (let student of students){
        // studentNames.push(student.name) ; 
        studentNames.push(student["name"]) ; // в [""] виводимо значення ключа
    }
    return studentNames.sort() ; 
}
console.log(getStudentsName(students));

//Function 5 Найкраща оцінка серед  студентів -----------------------------------------------------------------------

function getBestStudent (students){
    let bestStudent = students[0] ; //умовно найкращий студент 

    for (let student of students){
        if (getAvarageMark(student) > getAvarageMark(bestStudent) ) { // порівнюємо оцінку умовно першого найкращого студента з наступним
            bestStudent = student;
        }
    }

    return bestStudent.name;
}
console.log(getBestStudent(students))

//Function 6-----------------------------------------------------------------------
function calculateWordLetters (word) { 
    let wordLetter = {}; 

    for (let letter of word) {
        if (wordLetter[letter] === undefined) { // якщо такого ключа ще не існує , присвоюємо значення 0 
            wordLetter[letter] = 0;
        }
        wordLetter[letter] += 1 ;  
    }

    return wordLetter ; 
}
console.log(calculateWordLetters("тест"));
