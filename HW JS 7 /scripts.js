const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 ,
};

const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 ,
};

const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 ,
};

// function #1 ----------------------------------------
function getMyTaxes(salary){
    return ((this.tax * salary).toFixed());
};

// function #2 ----------------------------------------
function getMiddleTaxes(){
    return ((this.tax * this.middleSalary).toFixed());
};

// function #3 ----------------------------------------
function getTotalTaxes (){
    return ((this.tax * this.middleSalary * this.vacancies).toFixed());
};

// function #4 ----------------------------------------
function getMySalary (country){
    let minSal = 1500; 
    let maxSal = 2000;
    let myRandomSalary = Math.floor(Math.random() * (minSal - maxSal) + maxSal) ; 
    
    let profit = 0 ; 
    // profit = (myRandomSalary - (country.tax * myRandomSalary).toFixed()) ;
    profit = (myRandomSalary - getMyTaxes.call(country, myRandomSalary)) ;

    let info = {};
    info["salary"] = myRandomSalary;
    info["taxes"] = country.tax;
    info["profit"] = profit;

    console.log('Function 4:' , info)
    return info;
}

console.log('Function 1:' ,getMyTaxes.call( ukraine , 1500));
console.log('Function 2:' ,getMiddleTaxes.call(ukraine));
console.log('Function 3:' ,getTotalTaxes.call(ukraine));
setInterval(getMySalary, 10000, ukraine);



