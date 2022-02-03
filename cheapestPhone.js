const phones=[
    {name:"walton",price: 5000},{name:"motorola",price:3000},{name:"samsung",price:7000}
]
 function mobile(n){
    let cheapest=n[0]
    for(const i of n)
    {
        if(cheapest.price>i.price){
            cheapest=i
        }
    }
    return cheapest;


 }
let result= mobile(phones)
console.log(result)