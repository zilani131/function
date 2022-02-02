function num(x,y){
    if (x>y){
        // result=console.log(x + " is greater than " +y) the result will give the correct ans along with undefined alarm ,because of the console result can not understand which tpye is result
        let result=x + " is greater than " +y;    
         
        return result;
    }
    else {
        let result =y+ " is greater than "+x;
        return result;

    }
   
}
let f=15,k=6;
let final=num(f,k)
console.log(final)