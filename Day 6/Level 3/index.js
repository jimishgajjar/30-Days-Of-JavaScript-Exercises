let countries = [
  "Hungary",
  "Albania",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Japan",
  "Kenya",
  "Germany",
  "Bolivia",
  "Finland",
  "Ireland",
];

let webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// Leval 3 Question 1
console.log("Leval 3 Question 1");
let newcountries = countries.slice(0, countries.length);
console.log("New Countries Array");
console.log(newcountries);
console.log("\n");

// Leval 3 Question 2
console.log("Leval 3 Question 2");
let sortedCountries = newcountries.sort();
console.log("New Countries Sorted");
console.log(sortedCountries);
console.log("\n");

// Leval 3 Question 3
console.log("Leval 3 Question 3");
let sortedMernStack = mernStack.sort();
console.log("New Mern Stack Sorted");
console.log(sortedMernStack);
console.log("\n");

countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// Leval 3 Question 4
console.log("Leval 3 Question 4");
let countriesWithLand = [];
for (i = 0; i < countries.length; i++) {
  if (countries[i].includes("land") == true) {
    countriesWithLand.push(countries[i]);
  }
}
console.log("Array Which Containes Word 'Land'");
console.log(countriesWithLand);
console.log("\n");

// Leval 3 Question 5
console.log("Leval 3 Question 5");
let countriesLen = [];
for (i = 0; i < countries.length; i++) {
  countriesLen.push(countries[i].length);
}
console.log(
  `Contry which length is heighest: ${
    countries[countriesLen.indexOf(Math.max.apply(null, countriesLen))]
  }`
);
console.log("\n");

// Leval 3 Question 6
console.log("Leval 3 Question 6");
console.log("Same As Question 4");
console.log("\n");

// Leval 3 Question 7
console.log("Leval 3 Question 7");
let countries4characters = [];
for (i = 0; i < countriesLen.length; i++) {
  if (countriesLen[i] == 4) {
    countries4characters.push(countries[i]);
  }
}
console.log("Countries containing only four characters");
console.log(countries4characters);
console.log("\n");

let twoOrMorewords = [];
for (i = 0; i < countries.length; i++) {
  let splitStr = countries[i].split(" ");
  if (splitStr.length >= 2) {
    twoOrMorewords.push(countries[i]);
  }
}
console.log("Countries containing two or more words from the countries");
console.log(twoOrMorewords);
console.log("\n");

let capitalCountries = [];
for (i = countries.length; i >= 0; i--) {
  capitalCountries.push(countries[i].toUpperCase());
}
console.log("Reverse the countries array and capitalize each country");
console.log(capitalCountries);
console.log("\n");
