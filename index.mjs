import inquirer from "inquirer"; //imports insquirer
import fs from "fs"; //imports file system module
import path from "path"; // imports path module
import {generate} from "./generateReadMe.js" //imports generate function from generateReadMe.js

let validation = response => { // validation checker to prevent blank responses
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
            //title
            type: "input",
            message: "What is your project called?",
            name: "title",
            validate: validation
        },
        {
            // description
            type: "input",
            message: "Please describe your project.",
            name: "description",
            validate: validation
        },
        {
            //installation
            type: "input",
            message: "How do you install your application?",
            name: "installation",
            validate: validation
        },
        {
            //usage
            type: "input",
            message: "How would you use your application?",
            name: "usage",
            validate: validation
        },
        {
            //who made project
            type: "input",
            message: "Who contributed to the project?",
            name: "contributed",
            validate: validation
        },
        {
            //who can add on to project
            type: "input",
            message: "How can other people contribute to this project?",
            name: "contribution",
            validate: validation
        },
        {
            //how to test
            type: "input",
            message: "How would you test that your application is working properly?",
            name: "testing",
            validate: validation
        },
        {
            //license
            type: "checkbox",
            message: "Which license is this project covered under?",
            choices: ['MIT License', 'Apache Licence 2.0', 'GNU General Public Licence v3.0'],
            name: "license",
            validate: validation
        },
        {
            //github username
            type: "input",
            message: "What is your GitHub username?",
            name: "gitUser",
            validate: validation
        },
        {
            // email address
            type: "input",
            message: "What is the email your email address? E.G: example@domain.com",
            name: "email",
            validate: validation
        }
    ])
    .then(data => { //creates a new file in current folder called readMe.md
        return fs.writeFileSync(path.join(process.cwd(), "readMe.md"), generate(data));
    })
