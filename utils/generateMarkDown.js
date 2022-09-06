// function generateLicense(license){
//     if (license !== 'none') {
//         return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;

//     } return "";
// }

function generateMarkDown(data) {
    return `# ${data.title}
    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributions](#contributions)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Description  
    ${data.description}
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}
  
    ## License
    ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  
    ## Contributions
  
    ${data.contribution}
  
    ## Tests
    ${data.test}
  
    ## Questions
    - ${data.email}
    - Github.com/${data.github}
  `;
  }


module.exports = generateMarkDown