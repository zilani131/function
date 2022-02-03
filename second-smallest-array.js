let n=[5,1,8,3,9,4,2]
function secondSmallest(z){
    let firstSmallest=z[0];
let secondSmallest;
for (let i=0;i<z.length;i++){
    if (z[i]<firstSmallest){
        secondSmallest=firstSmallest
        firstSmallest=z[i];
      
    }
    else if(firstSmallest<z[i] && secondSmallest>z[i]) {
        secondSmallest=z[i]
    }
}return secondSmallest;
} 
let result =secondSmallest(n)
console.log(result)
