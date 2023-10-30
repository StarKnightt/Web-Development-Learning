console.log("This is where we live");

// setTimeout --> Allows us to run the function once after the interval of time
// clearTimeout --> Allows us to run the function repeatedly after the interval of time

function greet(name) {
    console.log("Hello Good Morning" + name);
}

// setTimeout(greet,2000);
// setTimeout(greet,4000, " Prasen ");

// setTimeout(greet(), 12000); --> Wrong as it is calling the function inside setTimeout.

// timeOut = setTimeout(greet,4000, " Prasen ");
// console.log(timeOut);

// clearTimeout(timeOut);

// setInterval(greet,1000, " Prasen ");

// intervalId = setInterval(greet, 1000, "Prasen");
// clearInterval(intervalId);

function displayTime() {
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}

setInterval(displayTime,1000);