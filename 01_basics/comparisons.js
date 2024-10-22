// console.log(2 > 1)

// console. log("2" > 1); // output => true
// console. log("02" > 1); // output => true

// console. log(null> 0);
// console. log(null == 0);
// console. log(null >0);

// console. log(undefined == 0);
// console. log(undefined > 0);
// console. log(undefined < 0);

// ===  Strict check 
console.log("2" === 2);     // output => false(also checks datatypes of both)

let myObj = {
    name: "chintu",
    age: 12
}
 
const heroes = ["abhi", "kabhi", "nhi"];

const myFunc = function() {
    console.log("Heya fellas");
    
    // myFunc(); // reccursion
}

myFunc();

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// MEMORY\

let a = "jack";
let b = a;
b = "chintu";

console.log(a);
console.log(a);

let Lobj = {
    mail: "lsaas",
    name: "chintu"
}

let Robj = Lobj;

Robj.mail = "mssas";

console.log(Lobj);

 