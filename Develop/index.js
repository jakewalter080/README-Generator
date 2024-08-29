// TODO: Include packages needed for this application

import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [

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
            message: `Provide email address.`,
        },
        {
            type: 'input',
            name: `github`,
            message: `Provide your github url.`,
        },
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) => {
        if (error) {
            console.log(`Error writing file: ${error}`);
        } else {
            console.log(`Successfully generated: ${fileName} !`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        // const markdownContent = generateMarkdown(answers);
        // writeToFile('README.md', generateMarkdown(answers));
        writeToFile('README.md', answers);
    });
}

// Function call to initialize app
init();
