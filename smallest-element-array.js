function small(n){
    let smallest=n[0];
    for (let i=0;i<n.length;i++)
    {
        if(smallest>n[i]){
            smallest =n[i]
        }
    }
    return smallest;
   
   }
   let z=[2,9,6,0,1]
   let result =small(z)
   console.log(result)