const user = {
    username: "Abhishek",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website `);
        console.log(this);
        
        
    }
}

// user.welcomeMessage();
// user.username = "mahesh";
// user.welcomeMessage();

// console.log(this);


// const chai = function () {
//     let username = "hitesh";
//     console.log(this.username);
    
// }


// chai();

// const chai = () => {        // Arrow function
//     let username = "hitesh";
//     console.log(this.username ); // still will be undefined
// }

// chai();  

const addTwo = (a, b) => {
    return a + b;
}

// const addTwo = (a,b) => (a + b); // implicit definition , no 'return' keyword required

// const addTwo = (a,b) => a + b;


const obj = () => ({name: "chintu"});

console.log(addTwo(5,7));

console.log(obj());


