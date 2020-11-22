//Required npms
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown');
const util = require('util');
const fs = require('fs');
const axios = require('axios');
// const util = require('util');
// array of questions for user



// function to write README file
const writeToFile = util.promisify(fs.writeFile);

// function to initialize program
const init = () => 
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
          },
          {
            type: 'input',
            name: 'description',
            message: 'In a sentence or two, describe your project.',
          },
          {
            type: 'input',
            name: 'installation',
            message: 'What kind of command should be run to install dependencies?',
          },
          {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'ISC', 'none'],
          },
          {
              type: 'input',
              name: 'questions',
              message: 'To contribute to this project, reach out to ?',
          },
          {
              type: 'input',
              name: 'tests',
              message: 'What command should be used to run tests?',
          },
          {
            type: 'input',
            name: 'features',
            message: 'Does this project have any special features that make it stand out?',
          },
          {
            type: 'input',
            name: 'questions',
            message: 'Enter your GitHub Username',
          },
         
        


    ]);



// function call to initialize program
init()
.then((answers) => writeToFile('README.md', generateReadMe(answers)))
.then(() => console.log('Successfully wrote to README file'))
.catch((err) => console.error(err));

// async function getBadge() {
//   try {
//     const response = await axios.get(choices);
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getBadge();
