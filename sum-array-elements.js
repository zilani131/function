function num(z){
    let sum=0;
    for (let i=0;i<z.length;i++){
           sum=sum+z[i]
    }
    return sum;
}
let n=[2,3,4,5]
let result =num(n)

console.log(result)