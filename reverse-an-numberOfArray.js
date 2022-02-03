// let num=[];
// for(let i=0; i<10;i++){
//     num.push(i)
// }
// console.log(num)
// use i= num.length-1 cause idex last position is 2.if we use num.length there will be an undefined in the output array
let n=[1,2,3]
function numReverse(num)
{
    let nu=[]
for(let i=num.length-1;i>=0;i--){
 nu.push(num[i])
}
return nu;

}
let result = numReverse(n)
console.log(result)