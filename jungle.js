let n=21

function jungle(z){
    let count;
let first10milesdensity=10;
let second10milesdensity=40;
let restDensity=50;
    if(n<=10){
        count=10*first10milesdensity
        return count;
    }
    else if (n<=20){
        let first10milesQuantity=10*first10milesdensity;
        let restMiles=n-10;
        let second10milesQuantity=restMiles*second10milesdensity;
        count=second10milesQuantity+first10milesQuantity;
        return count
    }
    else {
        let first10milesQuantity=10*first10milesdensity;
       
        let second10milesQuantity=10*second10milesdensity;
        let lastMiles=n-20;
        let lastmilesQuantity=lastMiles*restDensity
        count=second10milesQuantity+first10milesQuantity +lastmilesQuantity;
        return count
    }
}
let result=jungle(n)
console.log(result)