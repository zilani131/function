function n(z){
    let f=[0,1]
    if(typeof z!="number"){
        return "entern a number"
    }
    if(z<2){
        return 'please enter a number greater than 1'
    }
    for(let i=2;i<z;i++){
        f[i]=f[i-1]+f[i-2];
       
    }
    return f ;
}
let x=-2;
let result =n(x)
console.log(result)