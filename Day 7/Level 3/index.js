// Leval 3 Question 2
console.log("Leval 3 Question 2");
function rgbColorGenerator() {
  i = 0;
  let rgbArr = [];
  while (i < 3) {
    rgbArr.push(Math.floor(Math.random() * 256));
    i++;
  }
  return `RGB Color Code: rgb(${rgbArr.toString()})`;
}
console.log(rgbColorGenerator());
console.log("\n");

// Leval 3 Question 3
console.log("Leval 3 Question 3");
function arrayOfHexaColors() {
  let haxcode = (Math.random() * 0xfffff * 1000000).toString(16);
  return `Hexadecimal color code: ${"#" + haxcode.slice(0, 6)}`;
}
console.log(arrayOfHexaColors());
console.log("\n");

// Leval 3 Question 4
console.log("Leval 3 Question 4");
function rgbColorArrGenerator(arrLength) {
  let rgbColorArrGenerator = [];
  for (i = 0; i <= arrLength; i++) {
    let j = 0;
    let rgbArr = [];
    while (j < 3) {
      rgbArr.push(Math.floor(Math.random() * 256));
      j++;
    }
    rgbColorArrGenerator.push("rgb(" + rgbArr.toString() + ")");
  }
  return rgbColorArrGenerator;
}
console.log(rgbColorArrGenerator(5));
console.log("\n");

// Leval 3 Question 5
console.log("Leval 3 Question 5");
function convertHexaToRgb(hexa) {
  var aRgbHex = hexa.match(/.{1,2}/g);
  var aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];
  return `rgb(${aRgb})`;
}
console.log(convertHexaToRgb("ffffff"));
console.log("\n");

// Leval 3 Question 6
console.log("Leval 3 Question 6");
function convertRgbToHexa(r, g, b) {
  var rHex = parseInt(r).toString(16).padStart(2, "0");
  var gHex = parseInt(g).toString(16).padStart(2, "0");
  var bHex = parseInt(b).toString(16).padStart(2, "0");

  return `#${rHex}${gHex}${bHex}`;
}
console.log(convertRgbToHexa(255, 255, 255));
console.log("\n");

// Leval 3 Question 7
console.log("Leval 3 Question 7");
function generateColors(type, arrLength) {
  let colors = [];
  if (type === "rgb") {
    for (i = 0; i < arrLength; i++) {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      colors.push(`rgb(${r}, ${g}, ${b})`);
    }
  } else {
    for (let i = 0; i < arrLength; i++) {
      let haxcode = (Math.random() * 0xfffff * 1000000).toString(16);
      colors.push(`#${haxcode.slice(0, 6)}`);
    }
  }
  return colors;
}
console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors("hexa", 1)); // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'
console.log("\n");

// Leval 3 Question 8
console.log("Leval 3 Question 8");
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log("\n");

// Leval 3 Question 9
console.log("Leval 3 Question 9");
function factorial(num) {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorial(10));
console.log("\n");

// Leval 3 Question 10
console.log("Leval 3 Question 10");
function isEmpty(...args) {
  if (args == undefined || args == null || args == "") {
    return "Arguments Is Empty";
  } else {
    return "Arguments Is Not Empty";
  }
}
console.log(isEmpty());
console.log("\n");

// Leval 3 Question 11
console.log("Leval 3 Question 11");
function sum(...args) {
  let sum = 0;
  for (arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(sum(1, 2, 34, 5, 6));
console.log("\n");

// Leval 3 Question 12
console.log("Leval 3 Question 12");
function sumOfArrayItems(arr) {
  let sum = 0;
  for (num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sumOfArrayItems([1, 2, 34, 5, 6]));
console.log("\n");

// Leval 3 Question 13
console.log("Leval 3 Question 13");
function average(arr) {
  let sum = 0;
  for (num of arr) {
    sum += num;
  }
  return sum / arr.length;
}
console.log(average([1, 2, 34, 5, 6]));
console.log("\n");

// Leval 3 Question 14
console.log("Leval 3 Question 14");
function modifyArray(arr) {
  if (arr.length >= 5) {
    for (let i = 0; i < arr.length; i++) {
      if (i == 4) {
        arr[i] = arr[i].toUpperCase();
      }
    }
    return arr;
  } else {
    return `Not Found`;
  }
}
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
console.log(
  modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"])
);
console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"]));
console.log("\n");

// Leval 3 Question 15
console.log("Leval 3 Question 15");
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0 && num > 1) {
      return `${num} Is a Prime Number`;
    } else {
      return `${num} Not prime`;
    }
  }
}
console.log(isPrime(10));
console.log("\n");

// Leval 3 Question 16
console.log("Leval 3 Question 16");
function checkUnique(array) {
  let check = 0;
  for (i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j] && i != j) {
        check += 1;
      }
    }
  }

  if (check > 1) {
    return `Array Is Not Unique`;
  } else {
    return `Array Is Unique`;
  }
}
console.log(checkUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(checkUnique([1, 2, 3, 7, 5, 6, 7, 8, 9, 10]));
console.log("\n");

// Leval 3 Question 17
console.log("Leval 3 Question 17");
function sameDataType(array) {
  let check = 0;
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (typeof array[i] != typeof array[j]) {
        check += 1;
      }
    }
  }

  if (check >= 1) {
    return `All Item Data Type In Array Is Not Same Data Type`;
  } else {
    return `All Item Data Type In Array Same Data Type`;
  }
}
console.log(sameDataType([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sameDataType([1, "Test", 3, 7, 5, 6, 7, 8, 9, 10]));
console.log("\n");

// Leval 3 Question 18
console.log("Leval 3 Question 18");
function isValidVariable(varName) {
  let count = 0;
  let check = varName.match(/["!"#%&'()*+,-/:;<=>?@[\]^`{|}~"]/gi);
  if (check) {
    count = check.length;
  }
  if (typeof varName == "string" && count >= 1) {
    return `${varName} Variable Is Not Valid.`;
  } else {
    return `${varName} Variable Is Valid.`;
  }
}
console.log(isValidVariable("*Test")); // False
console.log(isValidVariable("Test")); // True
console.log(isValidVariable("__Test")); // True
console.log(isValidVariable("$Test")); // True
console.log(isValidVariable("T(est")); // False
console.log("\n");

// Leval 3 Question 19
console.log("Leval 3 Question 19");
function uniqueArray(len) {
  let arr = [];
  for (i = 0; i < len; i++) {
    let random = Math.floor(Math.random() * 11);
    if (arr.indexOf(random) == -1) {
      arr.push(random);
    }
  }
  return arr;
}

console.log(uniqueArray(7));
console.log("\n");

// Leval 3 Question 20
console.log("Leval 3 Question 20");
function reverseCountries() {
  let countries = ["nigeria", "U.S.A", "italy", "canada", "lebanon"];
  let newArr = [];
  for (i = countries.length - 1; i >= 0; i--) {
    newArr.push(countries[i]);
  }

  console.log("Original Array");
  console.log(countries);
  console.log("Reverse Array");
  console.log(newArr);
}
reverseCountries();
