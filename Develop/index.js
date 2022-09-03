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
    name: 'installation instructions',
    message: 'Provide installation instructions.',
  },
  {
    type: 'input',
    name: 'usage information',
    message: 'Provide usage information.',
  },
  {
    type: 'input',
    name: 'contribution guidelines',
    message: 'Provide contribution guidelines.',
  },
  {
    type: 'input',
    name: 'test instructions',
    message: 'Provide test instructions.',
  },
];


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
        writeFile('README.md', generateMarkDown({ ...inquirerResponses }));
      });

  }
  init();