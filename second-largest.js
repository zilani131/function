let z=[31,50,39,40,30,7,45]
var largest=z[0];
var second=z[0];
for (let i=0;i<z.length;i++){
    
  if (largest<z[i]){
   
      largest=z[i];
  }
  else if(second<z[i]&&z[i]<largest){
    second=z[i]
  }
            
}


console.log(second)