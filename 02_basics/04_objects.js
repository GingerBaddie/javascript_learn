const tu = {
    id: "123abc",
    name: "chintu",
    isLoggedIn: false
}

const ru = {
    email: "a@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhishek",
            lastname: "Mahito"
        }
    }
}

// console.log(ru.fullname);


// joining two objects

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};
const obj4 = {5: 'e', 6: 'f'};

// const obj3  = Object.assign({},obj1,obj2,obj4);

// console.log(obj3);


const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);

const users = [
    {
        id: 1,
        mail: "h@gmail.com"
    },
    {
        id: 1,
        mail: "h@gmail.com"
    },
    {
        id: 1,
        mail: "h@gmail.com"
    }
]

// console.log(users[1].mail);


// console.log(tu);

// console.log(Object.keys(tu));
// console.log(Object.values(tu));
// console.log(Object.entries(tu));

// console.log(tu.hasOwnProperty("isLoggedIn"));

//////////////////////// Object De-structure //////////////////////////////


const course = {
    coursename: "JS",
    price: "999",
    courseInstructor: "Abhi"
}

const {courseInstructor: ins} = course;

console.log(ins);


///////////////////////////// API (talk) //////////////////////////////////

//////////////////////////// json ////////////////////////////////////
// {

//     "name": "chintu",
//     "id": "1234"


// }

console.log(124 % 24  );

