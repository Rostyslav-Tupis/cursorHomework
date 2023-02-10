export function filterEvenNumbers (...numbers){

    let evenNumbers = numbers.filter(function(number){
        return number % 2 == 1
    }); 
    return evenNumbers
}