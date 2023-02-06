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
const btnDec = document.getElementById('dec');
const btnInc = document.getElementById('inc');


function* newFontGenerator(num){
    fontSize = num
    upOrDown = yield fontSize; 
    while(true){
        if (upOrDown === 'up'){
            fontSize += 2
            changeFz(fontSize)
            upOrDown = yield fontSize;
        }
        else if (upOrDown === 'down'){
            fontSize -= 2 
            changeFz(fontSize)
            upOrDown = yield fontSize
        }
        else {
            upOrDown = yield fontSize
        }
    }
}
const fzGenerator = newFontGenerator(14);

btnDec.addEventListener('click' , ()=>{
    fzGenerator.next('down').value
});
btnInc.addEventListener('click' , ()=>{
    fzGenerator.next('up').value
});

function changeFz(fz){
    document.querySelector("#text").style.fontSize = `${fz}px`
}
