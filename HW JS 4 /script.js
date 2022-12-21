const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми іструктури даних"];
const marks = [4, 5, 5, 3, 4, 5];
//----------------------------------------------------------------------------------------------------------
function getPairs (students){
    let pairsOfStudents = [];

    for(let i = 0 ; i < students.length ; i++){
        if(students[i][students[i].length - 1] !== "а" ){
            pairsOfStudents.push([students[i]]);
        }

    }

    let indexOfPairsStudents = 0 ; //коли находить жіноче ім`я , тоді переходить до наступного внутрішнього масива 
    
    for (let i = 0 ; i < students.length ; i++){
        
        if(students[i][students[i].length - 1 ] == "а" ){ // [students.length[i] -1 для того щоб дістати саме слово із масива і пройтися по його буквам]
            
            pairsOfStudents[indexOfPairsStudents].push(students[i]);// другі квадвартні дужки для того щоб відкити саме слово , перші дістаєм елемент масива , другі щоб цей елемент розбити на букви

            indexOfPairsStudents += 1 ;
        }
    }
    return pairsOfStudents ;
}

const pairs = getPairs (students);
console.log(pairs);

//----------------------------------------------------------------------------------------------------------

function getStudentsAndThemes (pairs ,themes ){

    let pairsAndThemes = [];

    for (let i = 0 ; i < pairs.length ; i++){ // в масив pairsAndThemes добавляємо 0 елемент масиву pairs (тобто ['Олекс'  'Олена']) , зєднюємо їх через join("i") і в цей самий масив добавлємо елемент з маству themes під індексом 0
        pairsAndThemes.push([pairs[i].join(" і ") ,themes[i]])//використовуємо той самий [і], що і для pairs , тому що кількість тем та пар однакова 
    }

    return pairsAndThemes ;

}
const pairsAndTheme = getStudentsAndThemes (pairs ,themes );
console.log(pairsAndTheme) ;

//----------------------------------------------------------------------------------------------------------

function sutdentAndMarks (students ,marks ){
    let studentMark = [];

    for (let i = 0 ; i < students.length ; i++){
        studentMark.push([students[i] , marks[i]]); //використовуємо той самий [і], що і для marks , тому що кількість оцінок та студентів однакова 
    }
    return studentMark;
}

const marksForStudents = sutdentAndMarks (students ,marks );
console.log(marksForStudents);

//----------------------------------------------------------------------------------------------------------

function getRandomMarks (pairsAndTheme){

    for (let i = 0 ; i < pairsAndTheme.length ; i++){

        let ramdomMark = Math.floor(Math.random() * 5) + 1 ; 

        pairsAndTheme[i].push(ramdomMark)
    }

    return pairsAndTheme;
}
const randomMark = getRandomMarks (pairsAndTheme);
console.log(randomMark);