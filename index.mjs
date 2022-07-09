import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import {generate} from "./generateReadMe.js"

let validation = response => {
    if (!response) {
        console.log("Response cannot be left blank! Please try again")
        return false
    } else {
        return true
    }
}

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your project called?",
            name: "title",
            validate: validation
        },
        {
            type: "input",
            message: "Please describe your project.",
            name: "description",
            validate: validation
        },
        {
            type: "input",
            message: "How do you install your application?",
            name: "installation",
            validate: validation
        },
        {
            type: "input",
            message: "How would you use your application?",
            name: "usage",
            validate: validation
        },
        {
            type: "input",
            message: "Who contributed to the project?",
            name: "contributed",
            validate: validation
        },
        {
            type: "input",
            message: "How can other people contribute to this project?",
            name: "contribution",
            validate: validation
        },
        {
            type: "input",
            message: "How would you test that your application is working properly?",
            name: "testing",
            validate: validation
        },
        {
            type: "checkbox",
            message: "Which license is this project covered under?",
            choices: ['MIT License', 'Apache Licence 2.0', 'GNU General Public Licence v3.0'],
            name: "license",
            validate: validation
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "gitUser",
            validate: validation
        },
        {
            type: "input",
            message: "What is the email your email address? E.G: example@domain.com",
            name: "email",
            validate: validation
        }
    ])
    .then(data => {
        return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(data));
    })