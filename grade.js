function grade(z){
   
    if(z>=80){
       return "got A+"
     

    }
    else if (z>=70 && z<80){
        return "got A"
     
    }
    else if (z>=60 && z<70){
        return "got A-"
    }
    else {
       return "fail"
    }

}
let num=68;
let gradeIs=grade(num)
console.log(gradeIs)