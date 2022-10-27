// Leval 1 Question 1
console.log("Leval 1 Question 1");
function fullName() {
  console.log("Jimish Gajjar");
}
fullName();
console.log("\n");

// Leval 1 Question 2
console.log("Leval 1 Question 2");
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(fullName());
console.log("\n");

// Leval 1 Question 3
console.log("Leval 1 Question 3");
function addNumbers(valOne, valTwo) {
  let sum = valOne + valTwo;
  return sum;
}
console.log(addNumbers(10, 20));
console.log("\n");

// Leval 1 Question 4
console.log("Leval 1 Question 4");
function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
console.log(areaOfRectangle(10, 20));
console.log("\n");

// Leval 1 Question 5
console.log("Leval 1 Question 5");
function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}
console.log(perimeterOfRectangle(10, 20));
console.log("\n");

// Leval 1 Question 6
console.log("Leval 1 Question 6");
function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  return volume;
}
console.log(volumeOfRectPrism(10, 20, 30));
console.log("\n");

// Leval 1 Question 7
console.log("Leval 1 Question 7");
function areaOfCircle(r) {
  let area = 3.14 * r * r;
  return area;
}
console.log(areaOfCircle(4));
console.log("\n");

// Leval 1 Question 8
console.log("Leval 1 Question 8");
function circumOfCircle(r) {
  let circumference = 2 * 3.14 * r;
  return circumference;
}
console.log(circumOfCircle(77));
console.log("\n");

// Leval 1 Question 9
console.log("Leval 1 Question 9");
const calculatesDensity = (mass, volume) => {
  let density = mass / volume;
  return density;
};
console.log(calculatesDensity(40, 20));
console.log("\n");

// Leval 1 Question 10
console.log("Leval 1 Question 10");
const speed = (TDC, TT) => {
  let speedofamovingobject = TDC / TT;
  return speedofamovingobject;
};
console.log(speed(10, 20));
console.log("\n");

// Leval 1 Question 11
console.log("Leval 1 Question 11");
const weight = (mass, gravity) => {
  return mass * gravity;
};
console.log(weight(10, 20));
console.log("\n");

// Leval 1 Question 12
console.log("Leval 1 Question 12");
let celsiusToFahrenheit = (celsius) => {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
};
console.log(celsiusToFahrenheit(10));
console.log("\n");

// Leval 1 Question 13
console.log("Leval 1 Question 13");
const BMIcalculate = (weight, height) => {
  let bmi = weight / (height / height);
  if (bmi < 18.5) {
    return `Underweight`;
  } else if (bmi > 18.5 && bmi < 24.9) {
    return `Overweight`;
  } else if (bmi > 25 && bmi < 29.9) {
    return `Overweight`;
  } else {
    return `Obese`;
  }
};
console.log(BMIcalculate(24));
console.log("\n");

// Leval 1 Question 14
console.log("Leval 1 Question 14");
const checkSeasons = (month) => {
  switch (month) {
    case "september":
    case "october":
    case "november":
      console.log("the season is Autumn");
      break;
    case "december":
    case "january":
    case "febuary":
      console.log("the season is Winter");
      break;
    case "march":
    case "april":
    case "may":
      console.log("the season is Spring");
      break;
    case "june":
    case "july":
    case "august":
      console.log("the season is Summer");
      break;
    default:
      console.log("invalid Month");
  }
};
checkSeasons("april");
console.log("\n");

// Leval 1 Question 15
console.log("Leval 1 Question 15");
function findMax(...args) {
  let max = args[1];
  for (let i = 0; i < args.length; i++) {
    // console.log(args[i]);
    if (args[i] > max) {
      max = args[i];
    }
  }
  return "Max is " + max;
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));
