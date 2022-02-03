const shoppingCart=[{name:'watch',price:300,quantity:10},
{name:'shirt',price:100,quantity:30},{name:'mobile',price:30000,quantity:3},]
let total=0;
for (const shopping of shoppingCart)
{
    let productPrice = shopping.price*shopping.quantity;
    total=total+productPrice;
}
console.log(total)