//  Theme Mode Toggle with Local Storage
const switchModeBtn = document.getElementById("switch-mode");
const LIGHT_MODE_KEY = "lightmode";

const enableLightMode = () => {
  document.body.classList.add("lightmode");
  localStorage.setItem(LIGHT_MODE_KEY, "active");
};

const disableLightMode = () => {
  document.body.classList.remove("lightmode");
  localStorage.setItem(LIGHT_MODE_KEY, "inactive");
};

// Apply stored theme on page load
if (localStorage.getItem(LIGHT_MODE_KEY) === "active") enableLightMode();

// Toggle theme on button click
switchModeBtn.addEventListener("click", () => {
  localStorage.getItem(LIGHT_MODE_KEY) !== "active" ? enableLightMode() : disableLightMode();
});

//  Calculator Logic
const screen = document.getElementById("screen");
const displayFunction = document.getElementById("display-function");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const backspaceBtn = document.querySelector(".backspace");
const clearBtn = document.querySelector(".AC");
const equalBtn = document.getElementById("equal");

let isNewInput = false;

//  Handle Number Input
for (const numBtn of numbers) {
  numBtn.addEventListener("click", () => {
    if (isNewInput) {
      screen.textContent = "0";
      isNewInput = false;
    }

    screen.textContent = screen.textContent.trim() === "0" 
      ? numBtn.textContent 
      : screen.textContent + numBtn.textContent;
  });
}

//  Handle Operator Input
for (const opBtn of operators) {
  opBtn.addEventListener("click", () => {
    let lastChar = screen.textContent.trim().slice(-1);

    // Allow "-" for negative numbers at the start
    if (screen.textContent.trim() === "0" && opBtn.textContent === "-") {
      screen.textContent = " - ";
    }
    // Prevent consecutive operators
    else if (!["+", "-", "*", "/", "%"].includes(lastChar)) {
      screen.textContent += ` ${opBtn.textContent} `;
    } else {
      screen.textContent = screen.textContent.trim().slice(0, -1) + ` ${opBtn.textContent} `;
    }

    isNewInput = false;
  });
}

//  Handle Backspace
backspaceBtn.addEventListener("click", () => {
  screen.textContent = screen.textContent.trim().slice(0, -1) || "0";
});

//  Clear Screen
clearBtn.addEventListener("click", () => {
  screen.textContent = "0";
  displayFunction.textContent="";
});

// Handle Calculation
equalBtn.addEventListener("click", () => {
  const equation = screen.textContent.trim();
  displayFunction.textContent = equation;

  try {
    const tokens = equation.match(/(-?\d+(\.\d+)?|[%+\-*/])/g);
    if (!tokens) throw "Invalid Expression";

    let result = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      let operator = tokens[i];
      let number = parseFloat(tokens[i + 1]);

      if (isNaN(number)) throw "Invalid Expression";

      switch (operator) {
        case "*": result *= number; break;
        case "/": 
          if (number === 0) throw "Division by zero"; 
          result /= number;
          break;
        case "+": result += number; break;
        case "-": result -= number; break;
        case "%": result %= number; break;
        default: throw "Invalid Operator";
      }
    }

    screen.textContent = result;
    isNewInput = true;
  } catch (error) {
    screen.textContent = "Error";
  }
});
