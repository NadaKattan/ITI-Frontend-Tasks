// 1- Function accept a full name string and convert each letter of
// first world to Capital and the remaining to small (Pascal Case).
// //Example : 'the quick brown fox'
// //Output : 'The Quick Brown Fox'

function convertToPascalCase(fullWord) {
  const words = fullWord.trim().split(" ");

  const pascalCaseWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return pascalCaseWords.join(" ");
}
console.log(convertToPascalCase("the quick brown fox")); // Output: 'The Quick Brown Fox'

// 2- Function that accept a sentence and return the longest word
// within the input
// //Example : 'Web Development Tutorial'
// //Output : 'Development'
function longestWord(str) {
  const words = str.trim().split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(longestWord("Web Development Tutorial"));

// 3- Write a JavaScript Function that returns a passed string with
// letters in alphabetical order
// //Example : javascript
// //Output : aacijprstv

function orderedStr(str) {
  // str=str.trim().split('').sort().join('');
  return str.trim().split("").sort().join("");
}
console.log(orderedStr("javascript"));

// 4- Define an array of numbers [2,1,3,2,7,2,8,4,3,6,10,9,12]
// • Sort them ascending then descending and print the result on
// console as table.
// • Filter numbers larger than 5 (use ES6 arrow function )
// • Display Max and Min Number
// Note: Using Math functions (Math.max and Math.min)
// • Use Array.from function to generate a copy from this array but
// elements will be multiplied by 5.
// • Remove repeated numbers from the array
// • Display the array elements from pervious step as string
// concatenated with *.
let arr = [2, 1, 3, 2, 7, 2, 8, 4, 3, 6, 10, 9, 12];
// Sort them ascending then descending and print the result on
// console as table.
console.table({
  Ascending: arr.slice().sort((a, b) => a - b),
  Descending: arr.slice().sort((a, b) => b - a),
});
// Filter numbers larger than 5 (use ES6 arrow function )
console.log(arr.filter((arrElem) => arrElem > 5));

// Display Max and Min Number
// Note: Using Math functions (Math.max and Math.min)
console.log(Math.max(...arr));
console.log(Math.min(...arr));

// Use Array.from function to generate a copy from this array but
// elements will be multiplied by 5.
const arrCopy = Array.from(arr);
console.log(arrCopy.map((e) => e * 5));

// Remove repeated numbers from the array
const uniqueArr = [...new Set(arr)];
console.log(arr);
console.log(uniqueArr);

// Display the array elements from pervious step as string
// concatenated with *.
console.log(arr.join("*"));

// 5- Write a JavaScript function to get the month name from a
// particular date and display the result on alert.
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function getMonthName(dateMonth) {
  alert(months[dateMonth]);
}
const dateMonth = new Date().getMonth();
getMonthName(dateMonth);
// console.log(date);
// console.log(months[date]);
