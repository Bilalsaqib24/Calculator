import inquirer from "inquirer";
import chalk from 'chalk';
import { addition, subtraction, multiplication, division, operations } from "./operations.js";

    let result;
    let message = 
        [
            {
            type: 'input',
            name: 'firstNumber',
            message: chalk.bgGreen.bold('Enter the First Number:'),
            validate: (input: number)  => !isNaN(input) || 'Please enter a valid number.',
            prefix: '>',
            },
            {
            type: 'input',
            name: 'secondNumber',
            message: chalk.bgGreen.bold('Enter the Second Number:'),
            validate: (input: number) => !isNaN(input) || 'Please enter a valid number.',
            prefix: '>',
            },
            {
            type: 'list',
            name: 'operation',
            message: chalk.bgGreen.bold('Select an Operation:'),
            choices: operations,
            prefix: '>',
            },
        ];

    let confirmation = 
        [
            {
            type: 'confirm',
            name: 'yesNo',
            message: chalk.bgYellow.bold('Are you want to do another calculation?'),
            prefix: '>',
            },
        ];

    let condition = true;
    while (condition) {
        let {firstNumber, secondNumber, operation} = await inquirer.prompt(message);
        switch (operation) {
            case 'Addition':
                result = addition(firstNumber, secondNumber);
                break;
            case 'Subtraction':
                result = subtraction(firstNumber, secondNumber);
                break;
            case 'Multiplication':
                result = multiplication(firstNumber, secondNumber);
                break;
            case 'Division':
                if (secondNumber !== 0) {
                result = division(firstNumber, secondNumber);
                } else {
                console.log('Error: Cannot divide by zero.');
                }
                break;
        }
        console.log(`> ` + chalk.bgGreen.bold(`${operation} of ${firstNumber} and ${secondNumber} is:`) + ` ${result}`);
        let {yesNo} = await inquirer.prompt(confirmation);
        condition = yesNo;
    }
    console.log("\n \n");
    console.log(chalk.bgMagenta.bold.underline("*** Thanks for using our mini calculator - Adam'sTech ***"));
    

