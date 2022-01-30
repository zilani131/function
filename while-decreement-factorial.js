function fact(z){
    let factorial=1,i=z;
    while(i>=1){
         factorial=factorial*i;
        i--;
      
    }
    return factorial;
}
let num=5;
let result = fact(num);
console.log(result)