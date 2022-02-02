function num(x,y,z){
    if(x>y && x>z){
        let result= x + " is greatest number";
        return result;
    }
    else if (y>z && y>x){
        let result= y + " is greatest number";
        return result;
    }
    else {
        let result= z + " is greatest number";
        return result;
    }
    
}
let n=2,k=3,m=4;
let f = num(n,k,m)
console.log(f)