function ave(n){
    let sum=0,average;
    for(let i=0;i<n.length;i++)
    {
        sum=sum+n[i];
    }
    average=sum/n.length;
    return average;
}
let z=[4,6,5]
let result = ave(z)
console.log(result);
