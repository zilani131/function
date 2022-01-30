function fact(z){
    let x=1;
    for(let i=1;i<=z;i++)
    {
        x=x*i
    }
    return x;
}
let num=5;
let result=fact(num)
console.log(result)