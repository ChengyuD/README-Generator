const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Please describe your project: "
    },
    {
        type: 'input',
        name: 'installation',
        message: "What installations are needed?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "How to use your application?"
    },
    {
        type: 'input',
        name: 'license',
        message: "Enter your license?"
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Contribution Instructions: "
    },
    {
        type: 'input',
        name: 'tests',
        message: "How to run tests on your project?"
    },
    {
        type: 'input',
        name: 'username',
        message: "Please enter your GitHub username: "
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email: "
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err)
            return
        }
    })
};

function init() {
    inquirer.prompt(questions)
        .then((data) => writeToFile("./README-sample.md", generateMarkdown(data))
    );
};

init();
