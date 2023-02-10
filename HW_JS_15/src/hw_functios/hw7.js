function getMyTaxes(salary){
    return ((this.tax * salary).toFixed());
};

export function getMySalary (country){
    let myRandomSalary = Math.floor(Math.random() * (1500 - 2000) + 2000) ; 
    
    let profit = 0 ; 
    profit = (myRandomSalary - getMyTaxes.call(country, myRandomSalary)) ;

    let info = {};
    info["salary"] = myRandomSalary;
    info["taxes"] = getMyTaxes.call(country, myRandomSalary);
    info["profit"] = profit;

    console.log('Function from hw7:' , info)
    return info;
}