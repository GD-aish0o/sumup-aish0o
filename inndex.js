#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// these variables store user input
var amOne = await inquirer_1.default.prompt({
    name: "firstAmount",
    type: "number",
    message: "Enter a digit.!"
});
var operators = await inquirer_1.default.prompt({
    name: "Operator",
    type: "list",
    message: "Please choose an Operator..!",
    choices: [
        "+ Add",
        "- Subtract",
        "X Multiply",
        "/ Divide",
        "% Calculate Percentage"
    ]
});
var amTwo = await inquirer_1.default.prompt({
    name: "SecondAmount",
    type: "number",
    message: "Please enter another amount."
});
// conditions:
if (isNaN(amOne.firstAmount) && isNaN(amTwo.SecondAmount)) {
    console.log("Enter a valid dataType.");
}
else {
}
