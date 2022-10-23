// Leval 2 Question 1
console.log("Leval 2 Question 1");
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

let randomStr = "";
const charactersLength = Math.floor(Math.random() * 100);
for (let i = 0; i < charactersLength; i++) {
  randomStr += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(`Random string: ${randomStr}`);
console.log("\n");

// Leval 2 Question 2
console.log("Leval 2 Question 2");
let haxcode = (Math.random() * 0xfffff * 1000000).toString(16);
console.log(`Hexadecimal color code: ${"#" + haxcode.slice(0, 6)}`);
console.log("\n");

// Leval 2 Question 3
console.log("Leval 2 Question 3");
i = 0;
let rgbArr = [];
while (i < 3) {
  rgbArr.push(Math.floor(Math.random() * 256));
  i++;
}
console.log(`RGB Color Code: rgb(${rgbArr.toString()})`);
console.log("\n");

// Leval 2 Question 4
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
console.log("Leval 2 Question 4");
let newCountrieyArr = [];
for (i = 0; i < countries.length; i++) {
  newCountrieyArr.push(countries[i].toUpperCase());
}
console.log(`New countries Array: `);
console.log(newCountrieyArr);
console.log("\n");

// Leval 2 Question 5
console.log("Leval 2 Question 5");
let countriesLen = [];
for (i = 0; i < countries.length; i++) {
  countriesLen.push(countries[i].length);
}
console.log(`countries Length:`);
console.log(countriesLen);
console.log("\n");

// Leval 2 Question 6
console.log("Leval 2 Question 6");
let countriesArrOfArr = [];
for (i = 0; i < countries.length; i++) {
  let newArr = [];
  newArr.push(countries[i].toUpperCase());
  newArr.push(countries[i].toUpperCase().slice(0, 3));
  newArr.push(countries[i].length);
  countriesArrOfArr.push(newArr);
}
console.log(countriesArrOfArr);
console.log("\n");

// Leval 2 Question 7
console.log("Leval 2 Question 7");
let existWord = [];
for (i = 0; i < countries.length; i++) {
  if (countries[i].includes("land") == true) {
    existWord.push(countries[i]);
  }
}
if (existWord != []) {
  console.log(`Array of countries which containing the word 'land'`);
  console.log(existWord);
} else {
  console.log(`Array of countries which not containing the word 'land'`);
  console.log(countries);
}
console.log("\n");

// Leval 2 Question 8
console.log("Leval 2 Question 8");
let wordExistia = [];
for (i = 0; i < countries.length; i++) {
  if (countries[i].endsWith("ia") == true) {
    wordExistia.push(countries[i]);
  }
}
if (wordExistia != []) {
  console.log(`Array of countries which containing the word 'ia'`);
  console.log(wordExistia);
} else {
  console.log(`Array of countries which not containing the word 'ia'`);
  console.log(countries);
}
console.log("\n");

// Leval 2 Question 9
console.log("Leval 2 Question 9");
console.log(
  `Contry which length is heighest: ${
    countries[countriesLen.indexOf(Math.max.apply(null, countriesLen))]
  }`
);
console.log("\n");

// Leval 2 Question 10
console.log("Leval 2 Question 10");
let countryHas5Char = [];
for (i = 0; i < countries.length; i++) {
  if (countries[i].length == 5) {
    countryHas5Char.push(countries[i]);
  }
}
console.log("Country containing only 5 characters");
console.log(countryHas5Char);
console.log("\n");

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Leval 2 Question 11
console.log("Leval 2 Question 11");
let webTechsLength = [];
for (let i = 0; i < webTechs.length; i++) {
  webTechsLength.push(webTechs[i].length);
}
console.log(
  `Longest word in the webTechs: ${
    webTechs[webTechsLength.indexOf(Math.max.apply(null, webTechsLength))]
  }`
);
console.log("\n");

// Leval 2 Question 12
console.log("Leval 2 Question 12");
let webTechsWithLen = [];
for (let i = 0; i < webTechs.length; i++) {
  let webTech = [];
  webTech.push(webTechs[i]);
  webTech.push(webTechs[i].length);
  webTechsWithLen.push(webTech);
}
console.log(`webTechs with length`);
console.log(webTechsWithLen);
console.log("\n");

// Leval 2 Question 13
console.log("Leval 2 Question 13");
let mernStack = ["MongoDb", "Express", "React", "Node"];
let mern = "";
for (let i = 0; i < mernStack.length; i++) {
  mern += mernStack[i][0];
}
console.log(`MERN by using the array mernStack: ${mern}`);
console.log("\n");

// Leval 2 Question 14
console.log("Leval 2 Question 14");
let techs = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
console.log(`Using For Loop`);
for (let i = 0; i < techs.length; i++) {
  console.log(techs[i]);
}
console.log(`Using For Of Loop`);
for (let tech of techs) {
  console.log(tech);
}
console.log("\n");

// Leval 2 Question 15
console.log("Leval 2 Question 15");
let fruites = ["banana", "orange", "mango", "lemon"];
for (i = fruites.length - 1; i >= 0; i--) {
  console.log(fruites[i]);
}
console.log("\n");

// Leval 2 Question 16
console.log("Leval 2 Question 16");
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (i = 0; i < fullStack.length; i++) {
  if (Array.isArray(fullStack[i]) == true) {
    for (let j = 0; j < fullStack[i].length; j++) {
      console.log(fullStack[i][j]);
    }
  } else {
    console.log(fullStack[i]);
  }
}
