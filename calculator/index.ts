#! /usr/bin/env node

import inquirer from "inquirer";

function main() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "num1",
        message: "Enter the first number",
      },
      {
        type: "input",
        name: "num2",
        message: "Enter the second number",
      },
      {
        type: "list",
        name: "operation",
        choices: ["+", "-", "*", "/"],
        message: "Enter Your Operation",
      },
    ])
    .then((answers) => {
      const { operation, num1, num2 } = answers;
      if (operation == "+") {
        sum(Number(num1), Number(num2));
      } else if (operation == "-") {
        subtract(Number(num1), Number(num2));
      } else if (operation == "*") {
        multiply(Number(num1), Number(num2));
      } else if (operation == "/") {
        division(Number(num1), Number(num2));
      } else {
        console.log("Invalid Operation");
      }
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

function sum(num1: number, num2: number) {
  const result = num1 + num2;
  console.log("Sum", result);
}
function subtract(num1: number, num2: number) {
  const result = num1 - num2;
  console.log("Subtraction", result);
}
function multiply(num1: number, num2: number) {
  const result = num1 * num2;
  console.log("Multiply", result);
}
function division(num1: number, num2: number) {
  const result = num1 / num2;
  console.log("Division", result);
}

main();
