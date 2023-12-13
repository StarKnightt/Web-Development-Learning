console.log("Learning about JavaScript funciton");

// Functions : A JavaScript function is a block of code that can be reused many times.

function hello(name, greetText="Greeting from Javascript") {
    // Local scope of funciton
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum (a,b,c){
    let d = a + b + c;
    return d;
}
let returnVal = sum (1,2,3);
console.log(returnVal);


// Global scope of functions
// let name = "Prasen";
// let name1 = "Harry";  
// let name2 = "Sagar";
// let greetText = "Good morning";

// hello(name, greetText);
// hello(name1, greetText);
// hello(name2);


// console.log(name +" is a good boy");
// console.log(name1 +" is a good boy");
// console.log(name2 +" is a good boy");



// function lisa (girl){
//     console.log(" Jisoo and jennie" + girl + " are Preety girl ");
// }
// lisa(" and lisa ");

function number(x,y,z) {
    let summ = x-y%z;
    return(summ);
}
let call = number(343,34,2);
console.log(call);

function cuties (l,j,r){
    let cute = (l + j + r);
    return cute;
}

let blackpink= cuties (" lisa ", " jennie "," rose ");
console.log(blackpink);

function boys (k,r,d){
    let crickter = (k+r+d);
    return (crickter);
    console.log("funciton is returned");  // This line will never execute.  (Unreachabel Code)
}

let crick = boys(" Kohili ", " Rohit ", " Dhoni ");
console.log (crick);

function books (a,m,r){
    let book = (a+m+r);
    return book;
}

let callingBooks = (" Atomic Habits " + " Psyschology of Money " + " Rich Dad And Poor Dad ");
console.log (callingBooks);


function beautiful(Blackie) {
    console.log("They are cuties" + Blackie)
}

beautiful(" Lisa, jennie and Rose ")


function GreaterNumber(Num1,Num2) {
    if (Num1>Num2) {
        return ("Num1 is greater");
    }
    else if (Num2>Num1){
     return ("Num2 is greater");
    }
    else {
        return "Both numbers are equal.";
    }
}

let check = GreaterNumber (189, 340);
console.log(check);

