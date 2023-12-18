console.log("this is Module");

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
    });
    return sum / arr.length;
}
// module.exports = {  // This is object 
//     avg: average,
//     name: "Prasen",
//     repo: "GitHub"
// } 
module.exports.name = "Prasen";
