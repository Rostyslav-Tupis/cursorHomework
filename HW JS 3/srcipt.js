
// функція №1 
function getMaxDigit(number){
    if (number == 0 ){
        return 0;
    }else{
        return Math.max(number % 10 , getMaxDigit(Math.round(number/10))); 
    }
}

//---------------------------------------------------------------------------------
// Функція №2 
function toPower (number , power){
    result = number ;

    for(let i = 0 ; i < power - 1  ; i++){
        result = result * number ; 
    }
    return result ; 

}

n = 4; 
p = 4;

// console.log('Функція №2 -',to_power(n , p));

//---------------------------------------------------------------------------------
// Функція №3 
function correctName (name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
// console.log('Функція №3 -',correctName(userName));


//---------------------------------------------------------------------------------
// Функція №4 
function percentageOfSalary(percent , salary ){
    onePercent = salary / 100 ;
    tax = onePercent * percent ; 
    return salaryAfterTax = salary - tax ;
}
percent = 17;
salary = 1732;

// console.log('Функція №4 -' , percentageOfSalary(percent , salary));

//---------------------------------------------------------------------------------
// Функція №5

function getRandomNumber(min , max ){
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

min = 1 ; 
max = 10 ; 
// console.log(getRandomNumber(min , max ))
//---------------------------------------------------------------------------------
// Функція №6

function countLetter (letter , word){
    let counter = 0 ;
    for (let i = 0 ; i < word.length ; i++ ){
        if(word[i].toLowerCase() == letter.toLowerCase()){
            counter = counter + 1 ; 
        }
    }
    return counter ; 
}

letter = 'a';
word = 'abracadabra';

// console.log('Функція №6 -' , countLetter(letter , word));


//---------------------------------------------------------------------------------
// Функція №7 , 8 

function convertCurrency (money){

    if(money[money.length -1 ] == "$"){ //в квадратних дужка записуємо індекс під яким буде стояти символ чи буква 
        return +money.slice( 0 , money.length -1) * 39 ; 

    } else if (money.slice(money.length - 3, money.length).toUpperCase() == "UAH"){//slice повертає (залишає) те що вирізалося інше відкидається
        return +money.slice( 0 , money.length -3) / 39 ; 

    }else {
        alert('Wrong input');
        prompt("type again")
    }

}
// console.log(convertCurrency(value));

//!--------------------------------------------------------------------------------
//!функція 9 , 10 passWord = Math.random().toString().substr(2, 8)
function getRandomPassword( passLenght = 8 ){
    let passWord = ""; 

    min = 1 ; 
    max = 10 ; 
    
    for ( let i = 0 ; i < passLenght  ; i++){
        passWord = passWord.toString() + Math.floor(Math.random() * (max - min) + min); // навіщо добавляти стрінгу до passWord ?
    }
    return passWord ; 
}

console.log(getRandomPassword(8));
//--------------------------------------------------------------------------------
//функція 11
function deleteLetters(letter , word){
   let result = word.toLowerCase().replaceAll( letter , "")
   return result ; 
}

console.log(deleteLetters("a" , "ababalang"));
//--------------------------------------------------------------------------------
//функція 12 

function isPalyndorm(word) {
    let reversedWord = '' ; 

    for (let i = word.length - 1 ; i >= 0; i-- ){
        
        reversedWord = reversedWord + word[i]; // the same as - reversedWord += word[i];
        
        // console.log(word[i], i, reversedWord)
    }
    if (reversedWord == word ){
        return true;
    } else {
        return false
    }
}
// userWord = prompt("Your word ")
// console.log(isPalyndorm(userWord));


document.writeln(`<p>Функція №1 - Найбільша цифра у числі 987 : ${ getMaxDigit(987)}</p>`);
document.writeln(`<p>Функція №2 (4 в 4 ступені): ${ toPower(4 , 4)}</p>`);
document.writeln(`<p>Функція №3 iHoR : ${correctName('iHoR')} </p>`);
document.writeln(`<p>Функція №4  : ${percentageOfSalary(percent , salary )} </p>`);
document.writeln(`<p>Функція №5 рандомне число  : ${getRandomNumber(min , max )} </p>`);
document.writeln(`<p>Функція №6 букв 'a' у слові 'abracadabra' : ${countLetter('a' , 'abracadabra' )} </p>`);
document.writeln(`<p>Функція №7, 8 (1150$ в UAH)  : ${convertCurrency("1150$")} </p>`);
document.writeln(`<p>Функція №9 , 10  : ${(getRandomPassword(8))} </p>`);
document.writeln(`<p>Функція №11 : ${deleteLetters("a" ,"ababalang" )} </p>`);
document.writeln(`<p>Функція №12 : ${isPalyndorm("madam")} </p>`);
