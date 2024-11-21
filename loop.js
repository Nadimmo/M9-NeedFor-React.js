for(let i = 0; i<6; i++){
    // console.log("hello world",i)
}
let sum = 0
for(let i = 0; i<100; i++){
    sum = sum + i;
    // console.log(i)
}
console.log("sum of 1 to 10:",sum)


let i = 0;
while(i<5){
    console.log(i)
    i++
}

let sum2 = 0;
while(sum2 < 42){
    sum2 = sum2 + i;
}
console.log("sum of 0 to 40:",sum2)



let array = [33,45,502,401,54]
let odd = []
for(let i = 0; i<array.length; i++){
    if(array[i] % 2 === 1){
        odd.push(array[i])
    }
}
console.log(odd)