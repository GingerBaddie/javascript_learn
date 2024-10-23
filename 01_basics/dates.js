// Dates

// let myDate = new Date();
// console.log((myDate));
// console.log((myDate.toString()));
// console.log((myDate.toDateString()));
// console.log((myDate).toISOString());
// console.log((myDate).toJSON());
// console.log((myDate).toLocaleString());
// console.log((myDate).toLocaleDateString());
// console.log((myDate).toLocaleTimeString());
// console.log((myDate).toUTCString());
// console.log((myDate).toTimeString());
 
// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate); 
// console.log(myCreatedDate.toLocaleString()); 
// let myCreatedDate = new Date("2024-02-23");
// console.log(myCreatedDate.toLocaleString()); 
// console.log(myCreatedDate.toDateString()); 
// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString()); 

// let myTimeStamp = Date.now();
// console.log(myTimeStamp); 
// console.log(myCreatedDate.getTime()); 
// console.log(Math.floor(Date.now()/1000)); // to get in milliseconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// to write date in own format , we use string interpolation , i.e. backticks ``
// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`); 

console.log(newDate.toLocaleString('default', {
    weekday: "long"

}));


