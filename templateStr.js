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

let result = `my name is ${arraylikeObject[0].name} and department is  ${arraylikeObject[0].dept} and my aim is join in  ${arraylikeObject[0].company.first}`
console.log(result)