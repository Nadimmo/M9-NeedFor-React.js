let array = [2,3,4,5,6,7]
let sum = 0
let NewArray = array.filter((a)=>{
    return sum = sum + a;
})
NewArray.push(10)
NewArray.shift()
console.log(NewArray)
console.log("sum of array:",sum)

let array2 =[20,30,50,40,90]
let total = 0;
let newarray = [...array2].filter((a)=>{
    return total = total + a;
})
console.log("sum of array:",total)
console.log(newarray)