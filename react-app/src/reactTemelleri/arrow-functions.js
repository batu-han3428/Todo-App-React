//es5
let getProductEs5 = function(id, name){
    return{
        id:id,
        name:name
    }
}

console.log(getProductEs5(1,"es5"));

let getProductES6 = (id,name) =>({
    id:id,
    name:name
});

console.log(getProductES6(2,"es6"));


const phones = [
    {name:'IPhone 8',price:4000},
    {name:'IPhone 9',price:5000},
    {name:'IPhone X',price:6000},
    {name:'IPhone 11',price:7000}
];

let priceES5 = phones.map(function(phone){
    return phone.price;
});

let priceES6 = phones.map(phone=>phone.price);//filterda da aynısını kullanabilirsin

console.log(priceES5);
console.log(priceES6);