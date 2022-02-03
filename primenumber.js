let z=9;
function prime(n){
    let factor=0
// as factor s means here divisors.a prime num is has two divisior 1 and itself .as our iteration we take from 2 and end before the given number so for now to become a prime number we should have 0 (no factor ). if we start our iteration from i=0 then we have condition if factor==2  then it wil become the prime number
for(let i=2;i<n;i++){
    if (n%i==0) {
        factor=factor+1
        
    }
}
let result;

if (factor==0){
 
  
   return n+" is a prime number";
}
else{
    
   
    return  n+ " is not a prime number";
}
}
let ans =prime(z)
console.log(ans)