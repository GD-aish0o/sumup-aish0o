#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter a digit.", type: "number", name: "amOne" },
    {
        message: "Please select an operator.",
        type: "list",
        name: "Operators",
        choices: ["Add", "Subtract", "Multiply", "Divide", "Calculate Percentage"],
    },
    { message: "Enter another digit.", type: "number", name: "amTwo" },
]);
// adding switchcase here to detect NaN input and prompt user not to use Nan input in calculator
// switch (answer) 
//   case answer.amOne = NaN:
//   case answer.amTwo = NaN:
//     console.log("Computer can not calculate Letters or Symbols, Enter Numerical digits only");
//     break;
// default:
if (answer.Operators === "Add") {
    console.log("Your total amount is: ", +answer.amOne + answer.amTwo);
}
else if (answer.Operators === "Subtract") {
    console.log("Your total amount is: ", +answer.amOne - answer.amTwo);
}
else if (answer.Operators === "Multiply") {
    console.log("Your total amount is: ", +answer.amOne * answer.amTwo);
}
else if (answer.Operators === "Calculate Percentage") {
    // formla of Percentage
    console.log("The total percentage of your given amount is:", Math.floor((answer.amOne / answer.amTwo * 100)), "%");
}
else if (answer.Operators === "Divide") {
    console.log("Your total amount is", Math.floor(answer.amOne / answer.amTwo));
}
//     break;
// }
console.log("\n \n\t\t\t\tThankYou For using SumUp-aish0o.!\n\n");
