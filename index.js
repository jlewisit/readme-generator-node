const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const generateMarkDown = require('./utils/generateMarkDown')

const questions = [  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your project's title?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information.',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidelines.',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Provide test instructions.',
  },
];

// Use this syntax for licensing info.  Make up the licensing types: MIT, etc
// { example: 'this',
//  name: 'that',
//  message: 'Heyyyyy what license you want and stuff?'
//  choices: [
//   "choice 1",
//   "choice 2",
//   "choice 3",
//   "None
// ]
// }


// Use then key word code suggested by tutor below?
// .then((data) => {
//   console.log(data);
// });


  // Write README
  function writeFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
  }

  function init() {
            // npm syntax
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeFile('generated-README.md', generateMarkDown({ ...inquirerResponses }));
      });

  }
  init();