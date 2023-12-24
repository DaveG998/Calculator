const a = 0;
const b = 0;
const op = "+";

let display = 0;

const btnNumbers = document.querySelectorAll(".numbers");

btnNumbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    const number = btn.textContent;
    display += number;
  });
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operator(a, b, op) {
  switch (op) {
    case "+":
      add(a, b);
      break;
    case "-":
      subtract(a, b);
      break;
    case "*":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
      break;
  }
}
