const z="hello"
let a=""
// for(const r of z){
//    a=r+a
// }
for (let i=0;i<z.length;i++){
    a=z[i]+a
}
console.log(a)