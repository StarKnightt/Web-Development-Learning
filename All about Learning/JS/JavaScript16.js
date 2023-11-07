let jsonObj = {
    name:"Prasen",
    channel: "CWP",
    friend: "Myself",
    food: "Gazar"       // #GazarLoverSquad
} 

console.log(jsonObj);
let myJsonStr = JSON.stringify(jsonObj); // it will take a valid json object and will convert it to an string
console.log(myJsonStr);

myJsonStr =myJsonStr.replace('Prasen', 'Lisa'); 
console.log(myJsonStr);

newJsonObj = JSON.parse(myJsonStr); // it will take a valid json string and convert it to an object
console.log(newJsonObj);