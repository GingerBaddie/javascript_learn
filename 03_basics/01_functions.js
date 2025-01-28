function sayMyname () {
    console.log("Abhishek");
    
} 

// sayMyname();

function add(n1, n2) {
    console.log(n1 + n2);
    
}

function NewAdd(n1, n2) {
    let result = n1 + n2;
    return result;
}


// add(1,3);
let result = NewAdd(4,7);
// console.log("result is ", result);

function lum(username) {
    if(!username) {
        console.log("please enter a username");
        return;
        
    }

    return `${username} just logged in`
}

function lum2(username = "mahesh") {
    if(!username) {
        console.log("please enter a username");
        return;
        
    }

    return `${username} just logged in`
}

// console.log(lum("chintu"));
// console.log(lum2());

function cal(...n1) {
    return n1;
}

// console.log(cal(1,2,3,4));

const user = {
    username: "Chintu",
    price: 100
}

function H_object(user) {
    console.log(`Username is ${user.username} and price is ${user.price}`);
    
}

H_object(user);

H_object({
    username: "sam",
    price: 34
})

const myarr = [1,2,3,4,5];

function H_array (arr) {
    return arr;
}

console.log(H_array(myarr));
console.log([5,3,2,1]);




