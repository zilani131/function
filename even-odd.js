function num(z){
    if(z%2==0){
        let number="even";
        return number;

    }
    else{
        let number="odd";
        return number;
    }
}
let inNum=45;
let result =num(inNum);
console.log('input number is ',result)