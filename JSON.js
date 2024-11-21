let arraylikeObject = 
    {
        name:"nadim mostofa",
        dept:"computer",
        roll:"611948",
        aim:"Join the tech company in sha allah",
        company:{
            first:"Google",
            second:"Microsoft",
            third:"Nasa"
        }
    }


const stringify = JSON.stringify(arraylikeObject)
console.log(stringify)

// let obj = {
//     "name":"nadim mostofa",
//     "dept":"computer",
//     "roll":"611948",
//     "aim":"Join the tech company in sha allah",
//     "company":{
//         "first":"Google","second":"Microsoft","third":"Nasa"
//     }
// }
// const par = JSON.parse(obj)
// console.log(par)