function rate(x,r,t){
    let final=x*(1+r*t)
    return final;
}
let initial=50,rte=10/100,time=5;
let result =rate(initial,rte,time)
console.log(result);