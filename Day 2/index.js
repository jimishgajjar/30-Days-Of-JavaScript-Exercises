let challenge = "30 Days Of JavaScript";

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(1));
console.log(challenge.substring(3, 21));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));

let str = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(str.split(","));

console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let str1 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str1.indexOf("because"));
console.log(str1.lastIndexOf("because"));
console.log(str1.search("because"));

let challenge1 = "  30 Days Of JavaScript  ";
console.log(challenge1.trim(" "));

console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("JavaScript"));
console.log(challenge.match("30"));

let challenge2 = "";
console.log(challenge2.concat("30 Days of", " JavaScript"));

console.log("\n");
console.log(challenge.repeat(9));

let challenge3 =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(challenge3);

let challenge4 =
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"";
console.log(challenge4);

let no = "10";
console.log(Number(no) === 10);

no = 9.8;
console.log(Math.round(no) === 10);

str = "python";
console.log(str.includes("on"));

str = "jargon";
console.log(str.includes("on"));

console.log(Math.floor(Math.random() * 100));

console.log(Math.floor(Math.random() * (100 - 50) + 50));
console.log(Math.floor(Math.random() * (255 - 0) + 0));

const characters = "Javascript";

function generateString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

console.log(generateString(10));

str = "You cannot end a sentence with because because because is a conjunction";
console.log(str.indexOf("because"));
console.log(str.lastIndexOf("because"));
console.log(str.substring(str.indexOf("because"), 54));

str =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(str.match(/love/gi));

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching";
console.log(
  sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
);

let text2 =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let salaries = text2.match(/\d+/g);
let totalAnnualIncome = 0;
salaries.forEach((element) => {
  totalAnnualIncome += Number(element);
});
console.log(totalAnnualIncome);
