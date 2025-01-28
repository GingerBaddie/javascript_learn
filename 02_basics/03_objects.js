// singleton
// Object.create // constructor method

// object literals

const mySym = Symbol("key1");

const ju =  {
    name: "Abhi",
    "full name": "Abhishek Mahito",
    // mySym: "mykey1" // wrong way
    [mySym]: "mykey1",    
    age: 18,
    loc: "chd",
    mail: "qwe",
    ili: false,
    lld: ["Mon", "Tue"]

} 

//   

// overwiting values 

ju.name = "chintu";

// freezing object
// Object.freeze(ju)

// console.log(ju);

ju.greeting = function () {
    console.log("Namste");
    
}

ju.greetingTwo = function() {
    console.log("Nmaste 2");
    
}

ju.greeting();
ju.greetingTwo();
console.log(ju.greeting());




