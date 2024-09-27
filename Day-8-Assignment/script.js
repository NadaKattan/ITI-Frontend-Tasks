// handling reject
function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let data = {nameOne: "mahmoud", nameTwo: "ola"};
            // let data;
            if(!data){
                reject(new Error("couldn't resolve the success"));
            }
            else{
                resolve(data);
            }
            
        },1000)
    })
}
fetchData()
.then(data =>console.log(data))
.catch(error => console.log(error));

// 1.Change the text of a button with the ID "myButton" to
// "Clicked!" when it is clicked.
myButton=document.getElementById("myButton");
function clicked(){
    myButton.innerHTML = "Clicked!";
}
function clickMe(){
    myButton.innerHTML = "click me";
}

// 2.Display an alert with the message "Button clicked!" when a
// button with the id "alertButton" is clicked. Add classname to
// this button ”myclass”.
function BtnClicked() {
    alert("alertButton");
}
let myAlertButton=document.getElementById("alertButton");
// myAlertButton.className="myclass";
myAlertButton.classList.add("myClass");
console.log(myAlertButton);

// 3.Change the background color of a div with the ID "colorDiv"
// to blue when the mouse enters the div.
// Change it back to white when the mouse leaves the div
let mycolorDiv=document.getElementById("colorDiv");
function changeColor(){
    mycolorDiv.style.backgroundColor="blue";
}
function returnColor(){
    mycolorDiv.style.backgroundColor="white";
}

// 4.Log the key pressed to the console when a key is pressed
// inside an input field with the ID "inputField". – hint (use
// keydown event)
let myInput=document.getElementById("inputField");
function consolePress(){
    console.log("key is pressed");
}
// myInput.addEventListener("keydown", (event) => {
//     console.log("Key pressed:", event.key);
//   });

// 5.Display the current value of an input field with the ID
// "inputField" in a div with the ID "displayDiv" when the input
// field's value changes. – hint (use input event)
let mydisplayDiv=document.getElementById("displayDiv");
function displayOnDiv(e){
    mydisplayDiv.textContent=e.target.value;
}

// 6.Prevent the default action of a link with the ID "myLink" when
// it is clicked, and display an alert instead.
// let myLink=document.getElementById("myLink");
function prevent(e){
    alert("it's an alert");
    e.preventDefault();
}

// 7.Display the coordinates of the mouse pointer in a div with the
// ID "mouseDiv" when the mouse moves inside the div. – hint
// (use mousemove event)
let myMouseDiv=document.getElementById("mouseDiv");
function displayCoordinate(e){
    const x_client = e.clientX;
    const y_client = e.clientY;
    const x_div = e.clientX - myMouseDiv.offsetLeft;
    const y_div = e.clientY - myMouseDiv.offsetTop;
    mouseDiv.textContent = `X_div: ${x_div}, Y_div: ${y_div}\nX_client : ${x_client}, Y_client : ${y_client}`;
}
// 8.Toggle the visibility of a div with the ID "toggleDiv" when a
// button with the ID "toggleButton" is clicked.
let myToggleDiv=document.getElementById("toggleDiv");

function toggleVisible(){
    if(myToggleDiv.style.display!=="none"){
        myToggleDiv.style.display="none";
    }
    else{
        myToggleDiv.style.display="block";
    }
}
// 9.Increment a counter displayed in a span with the ID "counter"
// each time a button with the ID "incrementButton" is clicked.
let myCntrDiv=document.getElementById("counter");
// let myBtnCntr=document.getElementById("incrementButton");
let count=0;
myCntrDiv.textContent=`${count}`;
function incrementcntr(){
    count++;
    myCntrDiv.textContent=`${count}`;
}



