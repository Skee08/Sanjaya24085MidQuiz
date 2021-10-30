function Arrayfunc(){var movies = ["Ravan","Batman", "Lion king", "Ironman", "Sniper"];
var fourthvalue = movies[3];

console.log(fourthvalue);

if (fourthvalue.charAt(0) === "I") {
console.log("Yay");
}

else{
console.log("Nay");    
}
}
Arrayfunc()
    




function Objectfunc(){
    var car = ["model", "color", "price"];

var car1 = { 
    model: "Honda",
    color: "red",
    price: 80
};

console.log(car1);


let price = 20;

if(price > 50 ){
    console.log('Expensive')
}

else if (price < 50){
    console.log('Affordable')
};



console.log(car1.color)
}

Objectfunc();
