function large(n){
 let largest=n[0];
 for (let i=0;i<n.length;i++)
 {
     if(largest<n[i]){
         largest =n[i]
     }
 }
 return largest;

}
let z=[2,9,6]
let result =large(z)
console.log(result)