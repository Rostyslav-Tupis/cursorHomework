let bread = 15.678 ; 
let apples = 123.965;
let rice = 90.2345;

// task 1 Максимальне число ------------------------
let max = (Math.max( bread , apples , rice))
console.log(`Максимальне число ${max}`); 

document.writeln(`<p>Максимальне число ${max}</p>`);

// task 2 Мінімальне число ------------------------
let min = (Math.min( bread , apples , rice))
console.log(`Мінімальне число ${min}`); 

document.writeln(`<p>Мінімальне число ${min}</p>`);

//task 3 Вартість всіх товарів ------------------------
let sum = bread + apples + rice ;

console.log(`Вартість всіх товарів ${sum}`);
document.writeln(`<p>Вартість всіх товарів ${sum}</p>`);

//task 4 Ціла вартість всіх товарів ------------------------
let b = Math.floor(bread) ; 
let a = Math.floor(apples) ; 
let r = Math.floor(rice) ; 

let wholeAmount = b + a + r ;
console.log(`Ціла вартість всіх товарів ${wholeAmount}`);

document.writeln(`<p>Ціла вартість всіх товарів ${wholeAmount}</p>`);

// task 5 Вартість всіх товарів округлена до сотень ------------------------
let roundSum = Math.round(wholeAmount / 100) * 100 ; 

console.log(`Вартість всіх товарів округлена до сотень ${roundSum}`);  

document.writeln(`<p>Вартість всіх товарів округлена до сотень ${roundSum}</p>`);

// task 6 Сума всіх товарів парне число ------------------------
if (wholeAmount % 2 == 0 ){
    console.log("Сума всіх товарів парне число:" , true );

    document.writeln(`<p>` ,"Сума всіх товарів парне число:" , true , `</p>`);
} else{
    console.log("Сума всіх товарів парне число:" , false );

    document.writeln(`<p>` ,"Сума всіх товарів парне число:" , false , `</p>`);
}

// task 7 Сума решти ------------------------
let sumBack = (500 - sum ) ; 

console.log(`Здача ${sumBack}`);
document.writeln(`<p>` ,`Сума решти ${sumBack}` , `</p>`);

//task 8 Середнє значення цін ------------------------
let product = [ bread , apples , rice ] ; 

const average = product.reduce((a, b) => a + b, 0) / product.length;

// * let avg  = sum / 3 ;  = 76.62583333333333
console.log(`Середнє значення цін ${average.toFixed(2)}`);

document.writeln(`<p>` ,`Середнє значення цін ${average.toFixed(2)}` , `</p>`);


// task 9 Випадкова знижка ------------------------
const random = Math.random();
const maxDiscount = 100 ; 
const minDiscount = 1 ;

let customDiscount = (maxDiscount - minDiscount) * random + minDiscount ; 

console.log(`Випадкова знижка ${customDiscount.toFixed(0)}%`);

document.writeln(`<p>Випадкова знижка : ${customDiscount.toFixed(0)}% </p>`);

// task 10 ------------------------
