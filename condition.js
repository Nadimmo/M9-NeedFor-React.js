let a = 40;
let b = 30;
if(a>b){
    console.log('A is Biggest')
}else if(a < b){
    console.log('B is Biggest')
}else{
    console.log("error")
}

let c = "200";
let d = 200;
if(c != d){
    console.log('C and D not Same')
}else if(c === d){
    console.log('C and D type same and value')
}else if(c == d){
    console.log('C and D just value same don not check data type')
}

let e = 208
let f = 50
let student = false;
if(e >= f && student === true){
    console.log('All Condition is right')
}else if(e <= f || student === false){
    console.log("just one condition is true")
}else{
    console.log("error")
}

let mark = 64;
if(mark >= 81 && mark <= 100){
    console.log('CGP A+')
}else if(mark >= 70 && mark <= 80){
    console.log('CGP A')
}else if(mark >= 60 && mark <= 69){
    console.log('CGP A-')
}else if(mark >=50 && mark <= 59){
    console.log('CGP B')
}else if(mark >=40 && mark <= 49){
    console.log('CGP B-')
}else if(mark >= 30 && mark <= 39){
    console.log("CGP C")
}else{
    console.log('you are Failed')
}