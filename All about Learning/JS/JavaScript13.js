console.log("javascript is working, this is date and time");
let now = new Date();
console.log(now);

let dt = new Date(1000);
console.log(dt);

// let newDate = new Date("2029-09-30");
// console.log(newDate);

// let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
let newDate = new Date(2023, 4, 6, 9, 3, 2, 34);
console.log(newDate);

let yr = newDate.getFullYear();
console.log("the year is ", yr);

let dtt = newDate.getDate();
console.log("the Date is ", dtt);

let month = newDate.getMonth();
console.log("the Month is ", month);

let hours = newDate.getHours();
console.log("the hour is ", hours);

newDate.setDate(15);
newDate.setHours(25);
newDate.setSeconds(35);
console.log(newDate);

setInterval(updateTime, 1000);

function updateTime() {
    time.innerHTML = new Date();
}