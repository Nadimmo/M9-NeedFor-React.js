let obj = {
    name:"nadim mostofa",
    dept:"computer",
    roll:"611948",
    aim:"Join the tech company in sha allah"
}
console.log(obj.roll)

let arraylikeObject = [
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
]

console.log(arraylikeObject[0].company.second)