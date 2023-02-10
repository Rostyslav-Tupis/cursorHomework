export function getPairs (students){
    let pairsOfStudents = [];

    for(let i = 0 ; i < students.length ; i++){
        if(students[i][students[i].length - 1] !== "а" ){
            pairsOfStudents.push([students[i]]);
        }

    }

    let indexOfPairsStudents = 0 ;  
    
    for (let i = 0 ; i < students.length ; i++){
        
        if(students[i][students[i].length - 1 ] == "а" ){ 
            
            pairsOfStudents[indexOfPairsStudents].push(students[i]);

            indexOfPairsStudents += 1 ;
        }
    }
    return pairsOfStudents ;
}