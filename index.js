const btn = document.querySelector(".btn");
const squareOne = document.querySelector(".password-one");
const squareTwo = document.querySelector(".password-two");
const squareThree = document.querySelector(".password-three");
const squareFour = document.querySelector(".password-four");
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
];

btn.addEventListener("click", () => {
  const shuffled = possibleChars.sort(() => 0.5 - Math.random());
  console.log(possibleChars.length);
  // let selected = shuffled.slice(0, n);
  let passwordOne = shuffled.slice(0, 9).join("");
  squareOne.textContent = passwordOne;
  let passwordTwo = shuffled.slice(10, 19).join("");
  squareTwo.textContent = passwordTwo;
  let passwordThree = shuffled.slice(20, 29).join("");
  squareThree.textContent = passwordThree;
  let passwordFour = shuffled.slice(30, 39).join("");
  squareFour.textContent = passwordFour;
  console.log(passwordOne, passwordTwo, passwordThree, passwordFour);
});
