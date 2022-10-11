let firstName = "Jimish";
let lastName = "Gajjar";
let myAge = 25;
let country = "India";
let city = "Ahmedabad";
let isMarried = true;
let year = 2022;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof myAge);
console.log(typeof country);
console.log(typeof city);
console.log(typeof isMarried);
console.log(typeof year);

console.log("\n");

console.log("10" === 10);
console.log(parseInt("9.8") == 10);

console.log("\n");

console.log(4 > 3);
console.log("str" === "str");
console.log(3 === 3);

console.log("\n");

console.log(3 > 4);
console.log("444" === 444);
console.log(3 === 4);

console.log("\n");

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

console.log("\n");

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

console.log("\n");

let str1 = "dragon";
let str2 = "python";
console.log(str1.includes("on") == true && str2.includes("on") == true);

console.log("\n");

//time object
let date = new Date();
console.log(`year:${date.getFullYear()}`);
console.log(`Month:${date.getMonth()}`);
console.log(`Date:${date.getDate()}`);
console.log(`Day:${date.getDay()}`);
console.log(`Hour:${date.getHours()}`);
console.log(`Minute:${date.getMinutes()}`);
console.log(`Second:${date.getSeconds()}`);
let YYYMMDD = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
let DDMMYYYY = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
let DdMmYYy = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
console.log(YYYMMDD);
console.log(DDMMYYYY);
console.log(DdMmYYy);

let oldDate = new Date("1/1/1997").getTime();
let newDate = new Date().getTime();

console.log(newDate - oldDate);
