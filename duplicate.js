const z=['zilani','rafi','rafi','mahadi','mahadi']
function duplicate(n){let f;
 let unique=[];
//  for (let i=0;i<n.length;i++)
for(const elements of n){
 
  if(unique.indexOf(elements)==-1)
  {unique.push(elements);}
}return unique}
let result=duplicate(z);
console.log(result);
