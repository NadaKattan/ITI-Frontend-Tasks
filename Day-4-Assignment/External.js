console.log(num1);
var num1=3,num2=2.9,num3=0xff;
// changing values of variables on console will change its value on console only but when we print from this file, it prints the same value
var fName="Nada",mName='Amin',lName=`Abdelsattar`;
fName[3]='A';
var flag=true;
console.log("This is the External JavaScript file");
console.log(fName);
console.log(typeof(fName), typeof(mName), typeof(lName), typeof(num1), typeof(num2), typeof(num3), typeof(flag));
console.log(num1+num2);
console.log(flag+num2);
console.log(fName+flag);
console.log(num1+fName);
console.log(num1*flag);
console.log(num1/lName);
console.log(`${fName} ${mName} ${lName}`);
