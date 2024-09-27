// console.log(printVariables(1, 2, 3));
// function printVariables(value1, value2, value3) {
//   return [value1, value2, value3];
// }
// console.log(printVariables(1, 2, 3));
// console.log(printVariables(1, 2, 3)[0]);
// console.log(printVariables(1, 2, 3)[1]);
// console.log(printVariables(1, 2, 3)[2]);
// // console.log(value1,value2,value3);

// console.log(printVariables(1, 2));

// function printVariables(value1, value2, value3 = 5) {
//   return [value1, value2, value3];
// }
// console.log(printVariables(1, 2));
// console.log(printVariables(1, 2, 3, 4, 5, 6));

// function printVariables(value1, value2, value3 = 5) {
//   let total = [];
//   for (var i = 0; i < arguments.length; i++) {
//     total[i] = arguments[i];
//   }
//   return total;
// }
// console.log(printVariables(1, 2, 3, 4, 5, 6));

// // function printVariables(value1, value2, value3=5) {
// //     var localVar=3; testingVar=5;
// //     let total=[];
// //     for(var i=0; i< arguments.length; i++){
// //         total[i]= arguments[i];
// //     }
// //     return total;
// // }
// // // console.log(localVar); //localVar is not defined
// // console.log(testingVar); //5
// // printVariables(1, 2, 5);
// // // console.log(localVar); //localVar is not defined
// // console.log(testingVar); //5

// let localVar=90;
// function printVariables(value1, value2, value3=5) {
//     var localVar=3; testingVar=5;
//     let total=[];
//     for(var i=0; i< arguments.length; i++){
//         total[i]= arguments[i];
//     }
//     console.log(localVar); //3
//     return total;
// }
// console.log(localVar); //90
// printVariables(1, 2, 5);
// console.log(localVar); //90

// // Now inside the function what if you remove let from localVar
// // and repeat the pervious Steps again?

// let localVar = 90;
// function printVariables(value1, value2, value3 = 5) {
//   // localVar=3; //Cannot access 'localVar' before initialization
//   testingVar = 5;
//   let total = [];
//   for (var i = 0; i < arguments.length; i++) {
//     total[i] = arguments[i];
//   }
// //console.log(localVar);//why??Cannot access 'localVar' before initialization
//   return total;
// }
// console.log(localVar); //90
// printVariables(1, 2, 5);
// console.log(localVar); //90

/*****************************STEP-TWO*******************************/

// //console.log(printVariables(1, 2, 3));//Cannot access 'printVariables' before initialization
// const printVariables = function (value1, value2, value3) {
//   return [value1, value2, value3];
// };
// console.log(printVariables(1, 2, 3));
// console.log(printVariables(1, 2, 3)[0]);
// console.log(printVariables(1, 2, 3)[1]);
// console.log(printVariables(1, 2, 3)[2]);
// // console.log(value1, value2, value3);

// console.log(printVariables(1, 2));

// const printVariables = function (value1, value2, value3=5) {
//   return [value1, value2, value3];
// }
// console.log(printVariables(1, 2));
// console.log(printVariables(1, 2, 3, 4, 5, 6));

// const printVariables = function (value1, value2, value3=5) {
//   let total = [];
//   for (var i = 0; i < arguments.length; i++) {
//     total[i] = arguments[i];
//   }
//   return total;
// }
// console.log(printVariables(1, 2, 3, 4, 5, 6));

// const printVariables = function (value1, value2, value3=5) {
//     var localVar=3; testingVar=5;
//     let total=[];
//     for(var i=0; i< arguments.length; i++){
//         total[i]= arguments[i];
//     }
//     return total;
// }
// // console.log(localVar); //localVar is not defined
// // console.log(testingVar); //testingVar is not defined
// printVariables(1, 2, 5);
// // console.log(localVar); //localVar is not defined
// console.log(testingVar); //5

// let localVar=90;
// const printVariables = function (value1, value2, value3=5) {
//     var localVar=3; testingVar=5;
//     let total=[];
//     for(var i=0; i< arguments.length; i++){
//         total[i]= arguments[i];
//     }
//     console.log(localVar); //3
//     return total;
// }
// console.log(localVar); //90
// printVariables(1, 2, 5);
// console.log(localVar); //90

// Now inside the function what if you remove let from localVar
// and repeat the pervious Steps again?

// let localVar = 90;
// const printVariables = function (value1, value2, value3=5) {
//   localVar=3; //working
//   testingVar = 5;
//   let total = [];
//   for (var i = 0; i < arguments.length; i++) {
//     total[i] = arguments[i];
//   }
//   console.log(localVar);//3
//   return total;
// }
// console.log(localVar); //90
// printVariables(1, 2, 5);
// console.log(localVar); //3

/*****************************STEP-THREE*******************************/

// // console.log(printVariables(1, 2, 3));//Cannot access 'printVariables' before initialization
// let printVariables = (value1, value2, value3) => {
//   return [value1, value2, value3];
// };
// console.log(printVariables(1, 2, 3));
// console.log(printVariables(1, 2, 3)[0]);
// console.log(printVariables(1, 2, 3)[1]);
// console.log(printVariables(1, 2, 3)[2]);
// // console.log(value1, value2, value3);

// console.log(printVariables(1, 2));

// let printVariables = (value1, value2, value3=5) => {
//   return [value1, value2, value3];
// }
// console.log(printVariables(1, 2));
// console.log(printVariables(1, 2, 3, 4, 5, 6));

// let printVariables = (value1, value2, value3) => {
//   let total = [];
//   for (var i = 0; i < arguments.length; i++) {
//     total[i] = arguments[i];
//   }
//   return total;
// }
// console.log(printVariables(1, 2, 3, 4, 5, 6));//load????

// let printVariables = (value1, value2, value3) => {
//     var localVar=3; testingVar=5;
//     let total=[];
//     for(var i=0; i< arguments.length; i++){
//         total[i]= arguments[i];
//     }
//     return total;
// }
// // console.log(localVar); //localVar is not defined
// console.log(testingVar); //5
// printVariables(1, 2, 5);
// // console.log(localVar); //localVar is not defined
// console.log(testingVar); //5

// let localVar=90;
// let printVariables = (value1, value2, value3) => {
//     var localVar=3; testingVar=5;
//     let total=[];
//     for(var i=0; i< arguments.length; i++){
//         total[i]= arguments[i];
//     }
//     console.log(localVar); //3
//     return total;
// }
// console.log(localVar); //90
// printVariables(1, 2, 5);
// console.log(localVar); //90

// Now inside the function what if you remove let from localVar
// and repeat the pervious Steps again?

// let localVar = 90;
// let printVariables = (value1, value2, value3) => {
//   localVar=3; //working
//   testingVar = 5;
//   let total = [];
//   for (var i = 0; i < arguments.length; i++) {
//     total[i] = arguments[i];
//   }
//   console.log(localVar);//3
//   return total;
// }
// console.log(localVar); //90
// printVariables(1, 2, 5);
// console.log(localVar); //3

/**************************Assignment-2******************************/
// function sum(v1,v2){
//     return v1 + v2;
// }
// console.log(sum(1,2));

// function sum(v1){
//     return v1 + v2;//v2 is not defined
// }
// console.log(sum(1,2));//v2 is not defined

// function sum(v1,v2){
//     return v1 + v2;
// }
// console.log(sum(1));//1+undefined = NaN

// function sum(v1,v2=5){
//     return v1 + v2;
// }
// console.log(sum(1));//1+5 = 6

// function sum(v1,v2=5){
//     return v1 + v2;
// }
// console.log(sum(1,"a"));//1a

// function sum(v1,v2){
//     isNaN(v2)?v2=6:v2;
//     return v1 + v2;
// }
// console.log(sum(1,"a"));//7

// function fun() {
//   let userName;
//   while (!userName || userName.trim() === "") {
//     userName = prompt("Enter your user name");
//   }
//   return userName.trim();
// }
// console.log(fun());
