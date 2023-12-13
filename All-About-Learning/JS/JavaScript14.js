// function first () {
//     console.log('Good morning');
// }

// arrow function
// let first = ()=> {
//     console.log('Good morning');
// }


let first = ()=> console.log('Good morning');

// let sum = (a,b)=>{
//    return a+b;
// };
let sum = (a,b)=> a+b; // shortcut for return function in arrow function
let half = a => a/2;


// first();
// setTimeout(() => {
//     console.log("we are inside");
// }, 3000);

let object1={
    greeting:"good morning",
    name:["prasen","rohan","djkhiladi","elon"],
    speaks(){
          this.name.forEach((student)=> {
            console.log(this.greeting + " kya tume khana chahiye " + student);
          });
    }
}
object1.speaks();