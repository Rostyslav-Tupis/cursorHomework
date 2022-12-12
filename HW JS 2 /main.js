
let n = Number(prompt("Type first number:"));
while (isNaN(n) || !Number.isInteger(n)){
    alert("Please type integer number");
    n =  Number(prompt("Type any number:"));
}

let m = Number(prompt("Type second number:"));
while (isNaN(m) || !Number.isInteger(m)){
    alert("Please type integer number");
    m =  Number(prompt("Type any number:"));
}

let conf = confirm("Do you want to skip even numbers ? ")

let sum = 0 ;

/*В змінну CONF потрапляє Boolean значення true/false і якщо true виконується дія з for ,
якщо значення false то виконується else (коментар для себе)*/
if(conf) {
    for(i = n; i <= m; i++) {
      if(i % 2 === 1) { //якщо виходить не парне число тоді ми його добавляємо до суми 
        sum += i
      } 
    }
  } else {
    for(i = n; i <= m; i++) {
      sum += i;
    }
  }

document.writeln(`<p>Сума чисел : ${sum} </p>`);
console.log(n , m , sum , conf);


let arr = [];
