

const name = "chintu";
const count = 40;
console.log(name);
console.log(name.__proto__);

console.log("My name is " + name + " and my repo count is " + count); // old method of writing 

console.log(`Hello my name is ${name} and my count is ${count}`); // new and currently used way.

// console.log(name.length);
// console.log(name.charAt(2));

const Nname = new String("Minku"); // Another way of declaring string 

// console.log(Nname.charAt(2));
// console.log(Nname.length);
// console.log(Nname.toUpperCase());
// console.log(Nname.indexOf('k'));

const newStr = Nname.substring(0, 4); 
console.log(newStr);

const Astring = Nname.slice(-2, 5);
console.log(Astring);

const nawa = "    chaddi    "
console.log(nawa);
console.log(nawa.trimEnd());
console.log(nawa.trim());

const url = "https://abhi.com/abhi%20hero";

console.log(url.replace('%20', '-'));
console.log(url.includes('sun'));  // output "False"

console.log(url.split('/'));






