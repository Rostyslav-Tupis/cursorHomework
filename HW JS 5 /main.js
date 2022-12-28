// Funtion #1 ------------------------------------------------------------
function getRandomArray(length, min , max){
    let randomNumbers = []; 

    for ( let i = 0 ; i < length ; i++){
        let randomNumb = Math.floor(Math.random() * max ) + min; 
        randomNumbers.push(randomNumb);
    }

    return randomNumbers; 

}
console.log("Функція 1:" ,getRandomArray( 10 , 1 , 100));

// Funtion #3 ------------------------------------------------------------
function getAverage(...numbers) { 
    let sum = 0 ; 
    let length = numbers.length;

    for ( let num of numbers){
        if ( Number.isInteger(num)){ //якщо число ціле , тоді ми його пушимо 
            sum += num ;
        } else { // якщо ні , тоді довжину масиву зменшуємо на один 
            length -= 1;
        }
        
    }
    return sum / length ; 
}
console.log("Функція 3:" ,getAverage(6 , 2, 55, 11, 78, 2, 55, 2.3 ,77, 57, 87, 23, 2, 56, 3, 2 , 10.5 ))

// !! Funtion #4 ------------------------------------------------------------
const getMedian = (...numbers) => {
    integerNumbers = numbers.filter(function (number) {
        return Number.isInteger(number); // ! Number.isInteger(number) повертаються лише цілі числа , нецілі пропускаються 
    }) ;

    if(integerNumbers.length % 2 == 1){ //якщо довжина непарна
        return integerNumbers[Math.floor(integerNumbers.length / 2)]// дістаємо одне середнє число (через ділення довжини масиву на 2 )
    } else {
        return (integerNumbers[integerNumbers.length / 2 - 1] + integerNumbers[integerNumbers.length / 2 ]) / 2 // дістаємо два середніх числа , додаємо їх та ділимо на 2 
    }
}
console.log("Функція 4:" ,getMedian(1, 2, 3, 4));


// Funtion #5 ------------------------------------------------------------
const filterEvenNumbers = (...numbers) => {
    let evenNumbers = []; 

    for (let digit of numbers){
        if (digit % 2 == 1 ){
            evenNumbers.push(digit)
        }
    }
    return evenNumbers;
}

console.log('Функція 5: ' , filterEvenNumbers(1, 2, 3, 4, 5, 6));

// Funtion #6 ------------------------------------------------------------
const countPositiveNumbers = (...numbers) => {
    let counter = 0 ; 

    for (let digit of numbers){
        if(digit > 0){
            counter += 1 ; 
        }
    }
    return counter ; 
    
}

console.log("Функція 6:" ,countPositiveNumbers(1, -2, 3, -4, -5, 6));
// Funtion #7 ------------------------------------------------------------
const getDividedByFive = (...numbers) =>{
    let number = [];

    for (let digit of numbers){
        if(digit % 5 == 0){
            number.push(digit)
        }
    }
    return number ;
}
console.log("Функція 7:" , getDividedByFive(6, 2,55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


// Funtion #8 ------------------------------------------------------------
function replaceBadWords(string){
    let words = string.split(" "); // розбиває стрінгу на масив по розділювачу 
    let badWords = ["fuck" , "shit", "dickhead"];
    let goodWords = [];

    for (let word of words){ //спочатку проходимося по масиві який перетворений зі string

        for (let badWord of badWords){ //проходимось по масиві badWords

            //replace не змінє оригінальне слово , воно повертає нове змінене (з вказаними змінами)
            word = word.replaceAll(badWord , "****"); 
        }
        goodWords.push(word)
    }

    return goodWords.join(" ")
}

console.log("Функція 8:" ,replaceBadWords("Are you fucking kidding dickhead"));


// Funtion #9 ------------------------------------------------------------
function divideByThree(words) {
    words = words.toLowerCase().split(" ") ; // розбиває стрінгу на масив 
    result = [];

    for(let word of words){
        if (word.length <= 3){
            result.push(word); 
        } 
        else {
            for (let i = 0 ; i < word.length ; i+= 3){ //кожну ітерацію перестурибуємо на 3 

                result.push(word.slice(i, i+3)) ; // вирізаємо слово по складах по 3 , скільки символів ми вирізоаємо 
            }
        }

    }

   
    return result
}
console.log("Функція 9:" ,divideByThree("ababalagan"));
