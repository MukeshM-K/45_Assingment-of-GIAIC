import { features } from "process";

function storeCarinfo(manufacturer:string, modelName:string, ...extraOption: { [key : string]: any}[] ): object{

   let carInfo = {
    manufacturer,
    modelName,
    ...Object.assign({}, ...extraOption)
   } 

return carInfo;

};

const answere = storeCarinfo("Honda", "Civic", {color:"black"}, {features:["navigation", "Power window"]})

console.log(answere);
