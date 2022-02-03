function num(n){
   let r;
    for(let i=1;i<=n;++i){

        if(i%3==0 && i%5==0){
          r=  console.log("foobar")
          
            
        }
        else if (i%3==0){
        r=console.log("foo")
        
        }
        else if (i%5==0){
         r=console.log("bar")
        
         
        }
        else{
           

            r=console.log(i)
            
           
    }
    
}
return r;
}
let z=10;
 num(z);
