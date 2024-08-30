#!/usr/bin/env node


// shebang
 


// dep
import inquirer from "inquirer";

// these variables store user input:



let amOne = await inquirer.prompt({
  name: "firstAmount",
  type: "number",
  message: "Please enter a digit or two ;)",
});
// conditions:

// checks if the provided DT is correct.

// prints this if not valid:
if (isNaN(amOne.firstAmount)) {
  console.error(
    "Provide numbers to be calculated NOT letters and symbols. \n \t \t >_<"
  );
} else {
  const operators = await inquirer.prompt({
    name: "Operator",
    type: "list",
    message: "please choose an Operator..!",
    choices: [
      "+ Add",
      "- Subtract",
      "X Multiply",
      "/ Divide",
      "% Calculate Percentage",
    ],
  });

  let amTwo = await inquirer.prompt({
    name: "SecondAmount",
    type: "number",
    message: "Please enter another amount.",
  });


//  

  // data type ==DT
  // This if checks if the 2nd DT is valid:

  if (isNaN(amTwo.SecondAmount)) {
    console.error("This SumUp-App can only calculate Numbers.!");

    // if the checkpoints are clear this else program will run:
  } else {
    // conditions for different operators chosen,

    if (operators.Operator == "+ Add") {
      console.log(Addition(amOne.firstAmount, amTwo.SecondAmount));

      // calculates
    } else if (operators.Operator == "- Subtract") {
      console.log(Subtraction(amOne.firstAmount, amTwo.SecondAmount));
    } else if (operators.Operator == "X Multiply"){
        console.log(Multiplication(amOne.firstAmount, amTwo.SecondAmount));
        
    } else if (operators.Operator == "/ Divide"){
        console.log(Division(amOne.firstAmount, amTwo.SecondAmount));
        
    } else if (operators.Operator == "% Calculate Percentage"){
        console.log(persantaij(amOne.firstAmount, amTwo.SecondAmount));
    }
  
}

// Functions

function Addition(amOne: number, amTwo: number) {
  return amOne + amTwo;
  // The code is pretty straightforward, isn't it..?!
}

function Subtraction(amOne: number, amTwo: number) {
  return amOne - amTwo;
}

function Multiplication(amOne: number, amTwo: number) {
    return amOne * amTwo;
}

function Division(amOne: number, amTwo: number) {
    return amOne / amTwo;
}

function persantaij(amOne: number, amTwo: number) {
    return (amOne / amTwo) * 100 ; }
}