let a = "";
let b = "";
let op = "";

let display = "";

let changed = false;

const btnNumbers = document.querySelectorAll(".numbers");
const screen = document.querySelector("#display");
const btnOperators = document.querySelectorAll(".operator");
const btnEquals = document.querySelector("#equals");
const btnPlusMinus = document.querySelector("#plus-minus");
const btnClear = document.querySelector("#clear");
const btnRedo = document.querySelector("#redo");
const btnDot = document.querySelector("#dot");

btnNumbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    const number = btn.textContent;
    display += number;
    displayScreen(display);
    changed = true;
  });
});

btnOperators.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (changed) {
      if (a == "") {
        op = btn.textContent;
        a = display;
      } else {
        b = display;
        calc();
        op = btn.textContent;
      }
      display = "";
      changed = false;
    } else if (!changed) {
      op = btn.textContent;
    }
  });
});

btnEquals.addEventListener("click", calc);

btnPlusMinus.addEventListener("click", () => {
  display = display.charAt(0) == "-" ? display.substring(1) : "-" + display;
  displayScreen(display);
});

btnClear.addEventListener("click", () => {
  a = "";
  b = "";
  op = "";
  display = "";
  displayScreen(display);
});

btnRedo.addEventListener("click", () => {
  if (display.length > 1) {
    display = display.substring(0, display.length - 1);
  } else if (display.length == 1) {
    display = "";
    changed = false;
  }
  displayScreen(display);
});

btnDot.addEventListener("click", () => {
  if (display.indexOf(".") == -1) display += ".";
});

function calc() {
  if (changed && a != "") {
    b = display;
    operator(parseFloat(a), parseFloat(b), op);
    b = "";
    if (a == Infinity) {
      displayScreen("ERROR");
      a = "";
      b = "";
      op = "";
      display = "";
    } else displayScreen(a);
    display = "";
    changed = false;
  }
}

function displayScreen(display) {
  if (display == "") {
    screen.textContent = "0";
  } else screen.textContent = display;
}

function add(num1, num2) {
  a = num1 + num2;
}

function subtract(num1, num2) {
  a = num1 - num2;
}

function multiply(num1, num2) {
  a = num1 * num2;
}

function divide(num1, num2) {
  a = num1 / num2;
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
