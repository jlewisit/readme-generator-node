// function generateLicense(license){
//     if (license !== 'none') {
//         return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;

//     } return "";
// }

function generateMarkDown(data) {
    return `# ${data.title}${data.email}${data.github}`
}

module.exports = generateMarkDown