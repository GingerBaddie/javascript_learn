

function one() {
    const username = "chintu";

    function two() {
        const website  =  "gfg";
        console.log(username);
        
    }
    
    two();
    // console.log(website);

    
}

one();


///////////////////////////////////// interesting ///////////////////////////////////////////

function addone(num) {  // function definition
    return num + 1;
}

console.log(addone(5));


console.log(addtwo(5)); // error because addtwo variable isn't defined before console log

const addtwo = function (num) {  // storing function in a variable
    return num + 2;
}

console.log(addtwo(5)); // NO error