import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "q1",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct , loggin successfully!");
    console.log(`your current balance is ${myBalance}`);
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "select your operation",
        choices: ["withdraw amount", "check balance"]
    }
]);
if (operationAns.operation === "withdraw amount") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "enter the amount withdraw",
        }
    ]);
    if (amountAns.amount > myBalance) {
        console.log("Insufficient balance");
    }
    else {
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} withdraw succssesfully!`);
        console.log(`your remaining balance is ${myBalance}`);
    }
}
else if (operationAns.operation === "check balance") {
    console.log(`your account balance is ${myBalance}`);
}
else {
    console.log("incorrect pin , try again");
}
