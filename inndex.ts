<<<<<<< HEAD
#!/usr/bin/env node

import inquirer from "inquirer";

// these variables store user input

const amOne = await inquirer.prompt (
    {
        name:"firstAmount",
        type:"number",
        message:"Enter a digit.!"
    }
)

const operators = await inquirer.prompt(
    {
        name:"Operator",
        type:"list",
        message: "Please choose an Operator..!",
        choices: [
            "+ Add",
            "- Subtract",
            "X Multiply",
            "/ Divide",
            "% Calculate Percentage"

        ]
    }
)

const amTwo = await inquirer.prompt(
    {
        name: "SecondAmount",
        type:"number",
        message:"Please enter another amount."
    }
)


// conditions:

if(isNaN(amOne.firstAmount) && isNaN(amTwo.SecondAmount)){
    console.log("Enter a valid dataType.");
    
} else {
    
=======
#!/usr/bin/env node

import inquirer from "inquirer";

// these variables store user input

const amOne = await inquirer.prompt (
    {
        name:"firstAmount",
        type:"number",
        message:"Enter a digit.!"
    }
)

const operators = await inquirer.prompt(
    {
        name:"Operator",
        type:"list",
        message: "Please choose an Operator..!",
        choices: [
            "+ Add",
            "- Subtract",
            "X Multiply",
            "/ Divide",
            "% Calculate Percentage"

        ]
    }
)

const amTwo = await inquirer.prompt(
    {
        name: "SecondAmount",
        type:"number",
        message:"Please enter another amount."
    }
)


// conditions:

if(isNaN(amOne.firstAmount) && isNaN(amTwo.SecondAmount)){
    console.log("Enter a valid dataType.");
    
} else {
    
>>>>>>> 139563167b44375926e38566c9c4464a1674e8d0
}