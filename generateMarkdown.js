// function to generate markdown for README
function generateMarkdown(answers) {
  return `# Title
  ${answers.title}

   ## Description
   ${answers.description} 

   ## Table of Contents

  [Installation](#installation)

  [License](#license)

  [Contributing](#contributing)

  [Tests](#tests)

  [Questions](#questions)

  [Special Features](#special features)



  ## Installation

  To install the necessary dependencies, run the following command:

    ### ${answers.installation}


  ## License

  This project is licensed under the ${answers.license} license

  [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})


  
  ## Contributing
  If you would like to contribute to this project please reach out to:
  ${answers.questions}

  [![User Badge](https://img.shields.io/badge/User-Julianne-blueviolet)](https://github.com/Juliannewood2413)

  ## Tests
  In order to run tests please enter this command:

  ${answers.tests}


  ## Questions
 If you have any further questions please reach out to:
  ${answers.questions}

  [![User Badge](https://img.shields.io/badge/User-Julianne-blueviolet)](https://github.com/Juliannewood2413)

  
  ## Special Features

  ${answers.features}
    

`;
}

module.exports = generateMarkdown;
