// Leval 2 Question 3
console.log("Leval 2 Question 3");
const printArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
printArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
console.log("\n");

// Leval 2 Question 4
console.log("Leval 2 Question 4");
function showDateTime() {
  let curentDate = new Date();

  let date = curentDate.getDate();
  let month = curentDate.getMonth();
  let year = curentDate.getFullYear();

  let hour = curentDate.getHours();
  let minutes = curentDate.getMinutes();

  return `${date}/${month}/${year} ${hour}:${minutes}`;
}
console.log(showDateTime());
console.log("\n");

// Leval 2 Question 5
console.log("Leval 2 Question 5");
function swapValues(val1, val2) {
  console.log(`Before Swap Val 1 = ${val1}, Val 2 = ${val2}`);
  let temp;
  temp = val1;
  val1 = val2;
  val2 = temp;
  console.log(`Ater Swap Val 1 = ${val1}, Val 2 = ${val2}`);
}
swapValues(10, 20);
console.log("\n");

// Leval 2 Question 6
console.log("Leval 2 Question 6");
function reverseArray(arr) {
  let revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }

  return revArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["A", "B", "C"]));
console.log("\n");

// Leval 2 Question 7
console.log("Leval 2 Question 7");
function capitalizeArray(arr) {
  let capitalArr = [];
  for (let capital of arr) {
    capitalArr.push(capital.toUpperCase());
  }

  return capitalArr;
}
console.log(capitalizeArray(["a", "b", "c", "d", "e"]));
console.log("\n");

// Leval 2 Question 8
console.log("Leval 2 Question 8");
let itemsCart = [];
function addItem(item) {
  itemsCart.push(item);

  return itemsCart;
}
console.log(addItem("Apple"));
console.log(addItem("Mango"));
console.log(addItem("Mobile"));
console.log(addItem("Laptop"));
console.log("\n");

// Leval 2 Question 9
console.log("Leval 2 Question 9");
function removeItem(index) {
  itemsCart.splice(index, 1);

  return itemsCart;
}
console.log(removeItem(1));
console.log(removeItem(2));
console.log("\n");

// Leval 2 Question 10
console.log("Leval 2 Question 10");
function sumOfNumbers(range) {
  let sumInRange = 0;
  for (i = 0; i <= range; i++) {
    sumInRange += i;
  }

  return "Sum of total in range: " + sumInRange;
}
console.log(sumOfNumbers(50));
console.log("\n");

// Leval 2 Question 11
console.log("Leval 2 Question 11");
function sumOfOdds(range) {
  let sumOfOdd = 0;
  for (i = 0; i <= range; i++) {
    if (i % 2 === 0) {
      sumOfOdd += i;
    }
  }

  return "Sum Of Of Odd Numbers In Range: " + sumOfOdd;
}
console.log(sumOfOdds(50));
console.log("\n");

// Leval 2 Question 12
console.log("Leval 2 Question 12");
function sumOfEven(range) {
  let sumOfEven = 0;
  for (i = 0; i <= range; i++) {
    if (i % 2 != 0) {
      sumOfEven += i;
    }
  }

  return "Sum Of Of Even Numbers In Range: " + sumOfEven;
}
console.log(sumOfEven(50));
console.log("\n");

// Leval 2 Question 13
console.log("Leval 2 Question 13");
function evensAndOdds(range) {
  let sumOfEvens = 0;
  let sumOfOdds = 0;
  for (i = 0; i <= range; i++) {
    if (i % 2 != 0) {
      sumOfEvens += 1;
    } else {
      sumOfOdds += 1;
    }
  }

  console.log(`The number of evens are ${sumOfEvens}.`);
  console.log(`The number of odds are ${sumOfOdds}.`);
}
evensAndOdds(100);
console.log("\n");

// Leval 2 Question 14
console.log("Leval 2 Question 14");
function sumOfArg(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(sumOfArg(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));

// Leval 2 Question 15
console.log("Leval 2 Question 15");
function randomUserIp() {
  let one = Math.floor(Math.random() * 255);
  let two = Math.floor(Math.random() * 255);
  let three = Math.floor(Math.random() * 255);
  let four = Math.floor(Math.random() * 255);
  return `User IP Address: ${one}:${two}:${three}:${four}`;
}
console.log(randomUserIp());
console.log("\n");

// Leval 2 Question 16
console.log("Leval 2 Question 16");
function randomMacAddress() {
  var mac = [];
  for (var i = 0; i < 6; i++) {
    mac[i] = Math.floor(Math.random() * 0x100);
  }
  mac[0] = (mac[0] & 0xfc) | 0x02;

  function hex(value) {
    if (value < 0x10) {
      return "0" + value.toString(16);
    } else {
      return value.toString(16);
    }
  }
  mac = mac.map(hex).join(":");

  return `Mac Address: ${mac}`;
}
console.log(randomMacAddress());
console.log("\n");

// Leval 2 Question 17
console.log("Leval 2 Question 17");
function randomHexaNumberGenerator() {
  let haxcode = (Math.random() * 0xfffff * 1000000).toString(16);
  console.log(`Hexadecimal color code: ${"#" + haxcode.slice(0, 6)}`);
}
randomHexaNumberGenerator();

// Leval 2 Question 18
console.log("Leval 2 Question 18");
function userIdGenerator() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  let randomStr = "";
  const charactersLength = Math.floor(Math.random() * 100);
  for (let i = 0; i < 6; i++) {
    randomStr += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return randomStr;
}
console.log(userIdGenerator());
