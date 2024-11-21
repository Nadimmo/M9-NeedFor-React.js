let array = [2,34,,5,43,53,39,64]
console.log(array.indexOf(43))
console.log("length of array :",array.length)
console.log("Search in array item:",array.includes(53))
console.log(array.push("Push in array new item"))
console.log(array.slice(1,4))
console.log(array.splice(1,4))
// console.log(array)

let num = [20,30,49]
let num2 = [90,80,70]
let result = num.join(...num2)
let result2  = num.concat(...num2)
console.log(result)
console.log(result2)

let reduce = [303,429,5395,84]
let r = reduce.reduce((a,b)=>{
    return a + b
})
console.log(r)