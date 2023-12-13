console.log("Learning about Loops in JavaScript");
// let i = 0;
// for(i=0; i<5;i++){
//     console.log(i);
// }

let friends = ["Prasen", "Vishnu", "Krishna", "Maheswar", "Ram"];
// for (let index = 0; index < friends.length; index++) {
//     console.log("Hello Friend," + friends[index]);   
// }

// friends.forEach(function f(element){
//     console.log("Hello Friend," + element + "To modern JavaScript");   

// });

// for (Element of friends){
//     console.log ("Hello Friend, " + Element + "to modern JavaScript again");
// }

// let girls =["Lisa", "Jennie", "Rose", "Jisoo"];
// for (let index = 0; index < girls.length; index++) {
// console.log("Cute and beautiful girls are = " + girls [index]);    
// }

// girls.forEach(function f(element){
//     console.log("hey cuties " + element + " in beautiful looks");
// });

// for (Cutie of girls){
//     console.log( "Hey beautiful " + Cutie + " How are you?")
// }

// let mobile = alert(hello);
// console.log (mobile);

let employee = {
    name: "Prasen",
    salary: 4,
    channel: "CWP"
}
for (key in employee) {
    console.log(`The ${key} of employee is ${employee[key]}`)
}

let girls = {
    name: "La lisa manoban",
    age: 25,
    Group: "BlackPink"
}

// Use this loop to iterate over objects in JavaScript
for (cute in girls) {
    console.log(`The ${cute} in the girl is ${girls[cute]}`)
}

// "While" Loop in javascript

let i = 0;
while (i < 4) {
    console.log(`${i} is less than 4`);
    i++;
}

// "do-while" Loop in javascript

let k = 34;
do {
    console.log(`${k} is less than 4 and we are inside do-while looop`);
    k++;
}
while (k < 4)
