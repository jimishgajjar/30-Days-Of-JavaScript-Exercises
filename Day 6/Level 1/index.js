// Leval 1 Question 1
console.log("Leval 1 Question 1");
console.log("For Loop");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("While Loop");
i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log("Do While Loop");
i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);
console.log("\n");

// Leval 1 Question 2
console.log("Leval 1 Question 2");
console.log("For Loop");
for (i = 10; i >= 0; i--) {
  console.log(i);
}
console.log("While Loop");
i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}
console.log("Do While Loop");
i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);
console.log("\n");

// Leval 1 Question 3
console.log("Leval 1 Question 3");
let n = 5;
for (i = 0; i <= n; i++) {
  console.log(i);
}
console.log("\n");

// Leval 1 Question 4
console.log("Leval 1 Question 4");
let string = "";
for (i = 0; i <= 6; i++) {
  for (let j = 0; j < i; j++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);
console.log("\n");

// Leval 1 Question 5
console.log("Leval 1 Question 5");
for (i = 0; i <= 10; i++) {
  let multiply = i * i;
  console.log(`${i} * ${i} = ${multiply}`);
}

// Leval 1 Question 6
console.log("Leval 1 Question 6");
console.log("i i^2 i^3");
for (i = 0; i <= 10; i++) {
  console.log(`${i}  ${Math.pow(i, 2)}   ${Math.pow(i, 3)}`);
}
console.log("\n");

// Leval 1 Question 7
console.log("Leval 1 Question 7");
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
console.log("\n");

// Leval 1 Question 8
console.log("Leval 1 Question 8");
for (i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
console.log("\n");

// Leval 1 Question 9
console.log("Leval 1 Question 9");
for (let i = 0; i <= 100; i++) {
  let flag = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  if (i > 1 && flag == 0) {
    console.log(i);
  }
}
console.log("\n");

// Leval 1 Question 10
console.log("Leval 1 Question 10");
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);
console.log("\n");

// Leval 1 Question 11
console.log("Leval 1 Question 11");
let evenSum = 0;
let oddSum = 0;
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}
console.log(
  `The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`
);

// Leval 1 Question 12
console.log("Leval 1 Question 12");
let oddEvenArr = [evenSum, oddSum];
console.log(oddEvenArr);
console.log("\n");

// Leval 1 Question 13
console.log("Leval 1 Question 13");
let fiveRandomNo = [];
for (i = 0; i < 5; i++) {
  fiveRandomNo.push(Math.round(Math.random() * 100));
}
console.log(`Five rando no: `);
console.log(fiveRandomNo);
console.log("\n");

// Leval 1 Question 14
console.log("Leval 1 Question 14");
let fiveUniqeNo = [];
while (fiveUniqeNo.length < 5) {
  let randoNo = Math.round(Math.random() * 100);
  if (fiveUniqeNo.indexOf(randoNo) == -1) {
    fiveUniqeNo.push(randoNo);
  }
}
console.log(`Five unique random no: `);
console.log(fiveUniqeNo);
console.log("\n");

// Leval 1 Question 15
console.log("Leval 1 Question 15");
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let randomStr = "";
const charactersLength = characters.length;
for (let i = 0; i < 6; i++) {
  randomStr += characters.charAt(Math.floor(Math.random() * charactersLength));
}
console.log(`Six characters random string: `);
console.log(randomStr);
