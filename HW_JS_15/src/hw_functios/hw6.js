export function getSubject (student) {
    let subjesctsUpperCase = [];

    for (let subj of Object.keys(student.subjects)){ // Object.keys дістаємо назву ключа 

        subj = subj.charAt(0).toUpperCase() + subj.slice(1);
        subj = subj.replace("_" , " ");
        subjesctsUpperCase.push(subj);

    }
    return subjesctsUpperCase ; 
}