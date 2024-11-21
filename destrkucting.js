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

const result = arraylikeObject[0].company
result["second"] = "facebook"
console.log(result)