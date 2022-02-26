const btn = document.querySelector(".btn");
const squareOne = document.querySelector(".password-one");
const squareTwo = document.querySelector(".password-two");
const squareThree = document.querySelector(".password-three");
const squareFour = document.querySelector(".password-four");
const input = document.querySelector(".input");
const possibleChars = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "!",
  "£",
  "@",
  "$",
  "%",
  "&",
  "*",
  "+",
  "?",
  "#",
  "z",
  "x",
  "y",
  "j",
  "k",
  "l",
  "m",
  "n",
  "q",
  "Z",
  "A",
  "H",
  "T",
  "I",
  "J",
  "K",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
];

const grabValueFromInput = () => {
  console.log(passwordLength);
};

const generatePassword = () => {
  const shuffled = () => possibleChars.sort(() => 0.5 - Math.random());
  passwordLength = input.value;

  let passwordOne = shuffled().slice(0, passwordLength).join("");
  let passwordTwo = shuffled().slice(0, passwordLength).join("");
  let passwordThree = shuffled().slice(0, passwordLength).join("");
  let passwordFour = shuffled().slice(0, passwordLength).join("");
  squareOne.textContent = passwordOne;
  squareTwo.textContent = passwordTwo;
  squareThree.textContent = passwordThree;
  squareFour.textContent = passwordFour;
};

btn.addEventListener("click", () => {
  generatePassword();
});

// Math.floor(Math.random() *)
