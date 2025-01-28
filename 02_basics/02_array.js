const marvel = ["a","b"];

const dc = ["c","d"];


// marvel.push(dc);
// console.log(marvel);

// const nh = marvel.concat(dc);
// console.log((nh));

const nnh = [...marvel, ...dc]; // 'spread' method
// console.log(nnh);

const an_a = [1,2,[3,4],5,6,[7,8,[10,11]]];
// console.log(an_a);

// console.log(an_a.flat(Infinity));

// console.log(Array.isArray("Abhi"));
// console.log(Array.from("Abhi"));
// console.log(Array.from({name: "Abhi"})); // intrssting

score1 = 100; 
score2 = 200; 
score3 = 300; 

// console.log(Array.of(score1, score2, score3));
console.log(Array.from(score1,score2, score3));



 
 