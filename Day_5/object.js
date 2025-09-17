const car = {
    brand : "mahindra",
    model : "suv 300",
    year : 2021
}
console.log(car.model);
function changemodel(obj){
    obj.model = "suv";
}
changemodel(car)
console.log(car.model);