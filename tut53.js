console.log("This is tutorial 53");

function greet(name, greetText = "greetings from javascript") {
  console.log(greetText + " " + name);
  console.log(name + " is a good boy");
}
let name = "Harry";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
let greetText = "Good Morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3); // functional value of 2nd parameter will be used

console.log(name + "is a good boy");
console.log(name1 + "is a good boy");
console.log(name2 + "is a good boy");
console.log(name3 + "is a good boy");

// let returnVal = greet(name3);
// console.log(returnVal)  // result:undefined

function sum(a, b, c) {
  let d = a + b + c;
  return d;
}
let returnVal = sum(1, 2, 3);
console.log(returnVal);
