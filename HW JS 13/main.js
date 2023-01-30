function* createIdGenerator(){
    for(let i = 1 ; i < Infinity ; i++){
        yield i
    }
}
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value); 
console.log(idGenerator.next().value); 
console.log(idGenerator.next().value); 
console.log('-------------------------');
//task 2 ========================================
function* newFontGenerator(num){
    fontSize = num
    upOrDown = yield fontSize; 
    while(true){
        if (upOrDown === 'up'){
            fontSize += 2
            upOrDown = yield fontSize;
        }
        else if (upOrDown === 'down'){
            fontSize -= 2 
            upOrDown = yield fontSize
        }
        else {
            upOrDown = yield fontSize
        }
    }
}
const fzGenerator = newFontGenerator(14)
console.log(fzGenerator.next('up').value);
console.log(fzGenerator.next('up').value);
console.log(fzGenerator.next('down').value);
console.log(fzGenerator.next('up').value);
console.log(fzGenerator.next('up').value);