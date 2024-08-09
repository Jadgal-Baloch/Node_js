// console.log("bhai kiya hall hai");
// console.log("Task of day one done");
// console.log("Hi github b ho gaya hai");
// console.log("GitHUB done");
// __________________________________________

// Module in node


// frist way to import module 

const newindex = require("./newIndex");
console.log('here is maths result', newindex.addfn(3 , 3)); 
console.log('here is maths result', newindex.subfn(9 , 6)); 


// another way to import module ;)
const {addfn , subfn} = require('./newIndex');

console.log('i am adding ' ,addfn(3,90),'i am subtracting' ,subfn(90,9));



// console.log(add(3,3));
