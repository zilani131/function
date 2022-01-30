function fact(z)
{
    let factorial=1;
    let i=1;
    while(i<=z){
        factorial=factorial*i;
        i++;
    }
    return factorial;

}
let input=5;
let result=fact(input);
console.log(result);