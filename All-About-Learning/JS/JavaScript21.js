// Dekho promises mtlb ek eventual completetion or failure of a asynchronous execution mtlb agar asynchronous acche se chal rha hai background mein to hame promises ki value return milegi warna pending or rejected aaeyga theek hai, agar fail nhai hua to phir aram se ham promises ki value chali ayegi, ishe pata chalta hai ki hamari background mein async achhe se chal rha hai ya nhai :), simple yar isiliye ham promises asynchronous operation handle karne keliye use karte hai, taki wo zyada se zyada organised and readable rahe.

// async function getData() {
//   // Simulate getting data from a server
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

async function getData() {
  // Simulate getting data from a server
  // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Hello",
      body: "World",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await x.json();
  return data;
}

async function main() {
  console.log("Loading modules");

  console.log("Do something else");

  console.log("Load Data");

  let data = await getData();
  console.log(data);
}

main();

// data.then((v)=>{

//     console.log(data);

//     console.log("process data")

//     console.log("task 2")
// });
