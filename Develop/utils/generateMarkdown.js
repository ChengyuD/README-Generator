function generateMarkdown(data) {
  return `
  # ${data.title}

  ![License: ${(data.license) ? data.license : 'None'}](https://img.shields.io/badge/License-${(data.license) ? data.license : 'None'}-blue)

  ## ${data.description}

  ## Table of Contents:
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contribution](#contribution)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Project Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.tests}

  ## License
  ${data.license}

  ## Contribution
  ${data.contribution}

  ## Questions
  Questions? Please contact me via email ${data.email} or visit my GitHub at ${data.username}

`;
}

module.exports = generateMarkdown;
