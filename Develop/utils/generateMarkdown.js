// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  } else {
    const badges = {
      'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      'GNU Public License v3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
      'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
      'BSD2-Clause "Simplified License': 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg',
      'BSD3-Clause "New" or "Revised" License': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
      'Boost Software License': 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
      'Creative Commons Zero v1.0 Universal': 'https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg',
      'Eclipse Public License 2.0': 'https://img.shields.io/badge/License-EPL%201.0-red.svg',
      'GNU Affero General Public License v3.0': 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg',
      'GNU General Public License v2.0': 'https://img.shields.io/badge/License-GPL%20v2-blue.svg',
      'GNU Lesser General Public License v2.1': 'https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg',
      'Modzilla Public License 2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
      'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg',
    };
    return `![License](${badges[license]})`;

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    const links = {
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
      'GNU Public License v3.0': 'https://www.gnu.org/licenses/gpl-3.0',
      'MIT': 'https://opensource.org/licenses/MIT',
      'BSD2-Clause "Simplified License': 'https://opensource.org/licenses/BSD-2-Clause',
      'BSD3-Clause "New" or "Revised" License': 'https://opensource.org/licenses/BSD-3-Clause',
      'Boost Software License': 'https://www.boost.org/LICENSE_1_0.txt',
      'Creative Commons Zero v1.0 Universal': 'http://creativecommons.org/publicdomain/zero/1.0/',
      'Eclipse Public License 2.0': 'https://opensource.org/licenses/EPL-2.0',
      'GNU Affero General Public License v3.0': 'https://www.gnu.org/licenses/agpl-3.0',
      'GNU General Public License v2.0': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
      'GNU Lesser General Public License v2.1': 'https://www.gnu.org/licenses/lgpl-2.1.html',
      'Modzilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
      'The Unlicense': 'http://unlicense.org/',
    };
  return links[license];
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    ## Title
    ${data.title}

    ## Description
    ${data.description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Usage
    ${data.usage}

    ## License
    ${renderLicenseBadge(data.license)}


    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.test}
    
    ## GitHub Link
    - GitHub: [${data.github}](https://github.com/${data.github})

    // Questions
    "For any questions, please contact me at: jakewalter080@gmail.com"

`;
}

export default generateMarkdown;
