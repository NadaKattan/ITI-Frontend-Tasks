// 1- create a web page that open existing small window and scroll it’s
// content to the end .
// Then from console try the following:
// a- check if the small window still opened, close it.
// b- Try to write your name on the small window document using
// document.write (what is the problem).
// c- Now don’t use document.write(Forbidden) instead use
// document.createElement to add your name inside a div and
// add that div to the small window’s body.
let myWindow;
function openWin() {
  myWindow = window.open(
    "./pageTwo.html",
    "test win",
    "width=700px, height=300px"
  );
  console.log(myWindow.closed);
  // var myBody=myWindow.document.childNodes[0].childNodes[1];
  // var myName = myWindow.document.createElement("div");
  // var myNameText = myWindow.document.createTextNode("Nada Amin");
  // myName.appendChild(myNameText);
  // myBody.appendChild(myName);
}

function closeWin() {
  myWindow.close();
  console.log(myWindow.closed);
}

//Now don’t use document.write(Forbidden) instead use
// document.createElement to add your name inside a div and
// add that div to the small window’s body.

// document.write("Nada Amin");
var myName = document.createElement("div");
var myNameText = document.createTextNode("Nada Amin");
myName.appendChild(myNameText);
document.getElementsByTagName("div")[0].appendChild(myName);

// // 2- Using document object method on the lecture’s HTML page
// // a- Find all images in page by two ways (document default collection and document methods).
// // b- Find all options for City drop down list.
// // c- Find all rows(tds) for second table in page.
// // d- Find all elements that contain class name fontBlue and Bgrey.
console.log(document.querySelectorAll("img"));
console.log(document.images);

document.querySelectorAll("option").forEach((e) => {
  console.log(e.innerText);
});

console.log("All rows: ");
document
  .querySelectorAll("table")[1]
  .querySelectorAll("td")
  .forEach((e) => {
    console.log(e.innerText);
  });

console.log(document.getElementsByClassName("fontBlue Bgrey"));

// // 3- Display the date with time on the document title
// // (document.title) which changed every second to show time with
// // date.
// // Note: use .toLocalString() method of the Date Object.

var intervalIti;
intervalIti = setInterval(updateClock, 1000);
function updateClock() {
  var myTime = new Date().toLocaleTimeString();
  document.title = myTime;
}
