// Question 1
console.log("Question 1");
let emptyArray = Array();
console.log(emptyArray);
console.log("\n");

// Question 2
console.log("Question 2");
let fiveNumber = [1, 2, 3, 4, 5];
console.log(fiveNumber);
console.log("\n");

// Question 3
console.log("Question 3");
console.log(fiveNumber.length);
console.log("\n");

// Question 4
console.log("Question 4");
console.log("First item : " + fiveNumber[0]);
console.log("Middle item : " + fiveNumber[2]);
console.log("Last item : " + fiveNumber[fiveNumber.length - 1]);
console.log("\n");

// Question 5
console.log("Question 5");
let mixedArray = [
  1,
  1.0,
  "One",
  true,
  null,
  undefined,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
];
console.log("Mixed Array : " + mixedArray);
console.log("Mixed Array Length : " + mixedArray.length);
console.log("\n");

// Question 6
console.log("Question 6");
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log("\n");

// Question 7
console.log("Question 7");
console.log("It Companies: " + itCompanies);
console.log("\n");

// Question 8
console.log("Question 8");
console.log("Number of companies in the array: " + itCompanies.length);
console.log("\n");

// Question 9
console.log("Question 9");
console.log("First Company:" + itCompanies[0]);
console.log(
  "Middle Company:" + itCompanies[Math.floor((itCompanies.length - 1) / 2)]
);
console.log("Last Company:" + itCompanies[itCompanies.length - 1]);
console.log("\n");

// Question 10
console.log("Question 10");
for (let i = 0; i < itCompanies.length; i++) {
  console.log(`It Companys of ${i} = ${itCompanies[i]}`);
}
console.log("\n");

// Question 11
console.log("Question 11");
for (let i = 0; i < itCompanies.length; i++) {
  itCompanies[i] = itCompanies[i].toUpperCase();
  console.log(`It Companys of ${i} = ${itCompanies[i]}`);
}
for (let i = 0; i < itCompanies.length; i++) {
  itCompanies[i] = itCompanies[i].toLowerCase();
  console.log(`It Companys of ${i} = ${itCompanies[i]}`);
}
console.log("\n");

// Question 12
console.log("Question 12");
console.log(itCompanies.toString());
console.log("\n");

// Question 13
console.log("Question 13");
let companyName = "Amazon";
let companyExist = itCompanies.indexOf(companyName);
if (itCompanies.indexOf(companyName) === -1) {
  console.log(`${companyName} Is not exist in itCompanies array.`);
} else {
  console.log(`${itCompanies[companyExist]} Is exist in itCompanies array.`);
}
console.log("\n");

// Question 14
console.log("Question 14");
for (let i = 0; i < itCompanies.length; i++) {
  let ifOExist = itCompanies[i].match(/o/g);
  if (ifOExist != null && ifOExist.length > 1) {
    console.log(`${itCompanies[i]} Has more than one "O"`);
  }
}
console.log("\n");

// Question 15
console.log("Question 15");
let sortedItCompanies = itCompanies.sort();
console.log("Sorted companies array: " + sortedItCompanies);
console.log("\n");

// Question 16
console.log("Question 16");
let reverseItCompanies = itCompanies.reverse();
console.log("Reverse companies array: " + reverseItCompanies);
itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log("\n");

// Question 17
console.log("Question 17");
console.log("First 3 companies: " + itCompanies.slice(0, 3));
console.log("\n");

// Question 18
console.log("Question 18");
let last3index = itCompanies.length - 3;
console.log(
  "Last 3 companies: " + itCompanies.slice(last3index, itCompanies.length)
);
console.log("\n");

// Question 19
console.log("Question 19");
console.log("Middle 3 companies: " + itCompanies.slice(2, 5));
console.log("\n");

// Question 20
console.log("Question 20");
itCompanies.shift();
console.log("Array After Remove First Element: " + itCompanies);
console.log("\n");

// Question 21
console.log("Question 21");
itCompanies.shift();
console.log(
  "Array Middle Values: " + itCompanies.slice(0, itCompanies.length - 1)
);
console.log("\n");

// Question 22
console.log("Question 22");
itCompanies.pop();
console.log("After Removing Last Company: " + itCompanies);
console.log("\n");

// Question 23
console.log("Question 23");
while (itCompanies.length > 0) {
  itCompanies.pop();
}
console.log("After Removing All Company: " + itCompanies);
console.log("\n");
