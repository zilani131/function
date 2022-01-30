function leap(z)
{
    if((z%4==0 && z%100!=0 )||(  z%400==0))
    {
        let year ="leap year";
       return year;
    }
    else{
        year ="not leap year";
        return year;
    }
}
let enter=400;
let result=leap(enter)
console.log(result)