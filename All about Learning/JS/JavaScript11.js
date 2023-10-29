console.log("heelo");

let para = document.getElementById('para'); 
para.addEventListener('mouseover', function run(){
      console.log('mouse inside'); 
    //   Using inside console
});

para.addEventListener('mouseout', function run(){
      alert('mouse now went outside');
});

function toggleHide () {
    // let btn = document.getElementById('btn');
    // let para = document.getElementById('para'); 

    // In modern javascript we don't need to separately mention the id name, it'll detect automatically but good practice is the above declaration because it is easy to maintain the code and easy to use .
     
    if (para.style.display != 'none'){   // changing the css elements
        para.style.display = 'none';
    }
    else {
        para.style.display = 'block';
    }
}

// function hidebutton() {
//     let btns = document.getElementById('btn2');
//     let paragraph = document.getElementById('para2');
//     if(paragraph.style.display != 'none') {
//         paragraph.style.display = 'none';
//     }

//     else {
//         paragraph.style.display = 'block';
//     }
// }