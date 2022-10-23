// Leval 2 Question 2
console.log("Leval 2 Question 2");
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let textSplit = text.split(" ");
console.log(textSplit);
console.log(textSplit.length);
console.log("\n");

// Leval 2 Question 3
console.log("Leval 2 Question 3");
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(`Shopping Cart :  ${shoppingCart}`);
let meatExist = shoppingCart.indexOf("Meat");
if (meatExist === -1) {
  console.log("Meat already exist in cart " + shoppingCart);
} else {
  shoppingCart.push("Meat");
  console.log("After updating cart " + shoppingCart);
}

let honeyExist = shoppingCart.indexOf("Honey");
shoppingCart.pop(honeyExist);
console.log(`After removing honey : ${shoppingCart}`);

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log("After Updating Tea : " + shoppingCart);
console.log("\n");

// Leval 2 Question 4
console.log("Leval 2 Question 4");
const countries = ["nigeria", "U.S.A", "italy", "canada", "lebanon"];
if (countries.indexOf("ethiopia") === -1) {
  countries.push("ethipia");
  console.log(`After Adding countries list: ${countries}`);
} else {
  console.log(countries[countries.indexOf("ethiopia")].toUpperCase);
}
console.log("\n");

// Leval 2 Question 5
console.log("Leval 2 Question 5");
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
if (webTechs.indexOf("Sass") === -1) {
  webTechs.push("Sass");
  console.log(`After Adding webTechs list: ${webTechs}`);
} else {
  console.log(webTechs[webTechs.indexOf("Sass")].toUpperCase);
}
console.log("\n");

// Leval 2 Question 6
console.log("Leval 2 Question 6");
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullstack = frontEnd.concat(backEnd);
console.log("Fullstack develpment:" + fullstack);
