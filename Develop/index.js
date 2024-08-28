// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// const inquirer = require('inquirer');
// const fs = require(`fs`);

// TODO: Create an array of questions for user input
const questions = [

// inquirer
//     .prompt([
        {
            type: 'input',
            name: `title`,
            message: `What is the title of your project?`,
        },
        {
            type: 'input',
            name: `description`,
            message: `Provide a description of your project.`,
        },
        {
            type: 'list',
            name: `table-of-contents`,
            message: `Table of Contents.`,
            choices: 
                [
                `Installation`, 
                `Usage`, 
                `License`, 
                `Contributing`, 
                `Tests`, 
                `Questions`
                ],
        },
        {
            type: 'input',
            name: `installation`,
            message: `Provide installation instructions.`,
        },
        {
            type: 'input',
            name: `usage`,
            message: `Provide usage instructions.`,
        },
        {
            type: 'list',
            name: `license`,
            message: `Provide usage instructions.`,
            choices: 
                [
                `Apache 2.0`, 
                `GNU Public License v3.0`, 
                `MIT`, 
                `BSD2-Clause "Simplified License`, 
                `BSD3-Clause "New" or "Revised" License`,
                `Boost Software License`, 
                `Creative Commons Zero v1.0 Universal`, 
                `Eclipse Public License 2.0`, 
                `GNU Affero General Public License v3.0`, 
                `GNU General Public License v2.0`, 
                `GNU Lesser General Public License v2.1`, 
                `Modzilla Public License 2.0`, 
                `The Unlicense`,
                `None`
                ],
        },
        {
            type: 'input',
            name: `contributing`,
            message: `Provide contribution instructions.`,
        },
        {
            type: 'input',
            name: `test`,
            message: `Provide testing instructions.`,
        },
        {
            type: 'input',
            name: `questions`,
            message: `Provide email address for questions.`,
        },
        {
            type: 'input',
            name: `github-link`,
            message: `Provide your github url.`,
        },
    ];

// Added: Function to write README file
function generateREADME(answers) {
    return 
    // Title
    {answers.title}

    // Description
    {answers.description}

    // Table of Contents
    {answers.table-of-contents}

    // Installation
    {answers.installation}

    // Usage
    {answers.usage}

    // License
    {answers.license}

    // Contributing
    {answers.contributing}

    // Tests
    {answers.test}

    // Questions
    "For any questions, please contact me at: jakewalter080@gmail.com"
    
    // GitHub Link
    "For more information, please visit my Github page at: jakewalter080"

}


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
