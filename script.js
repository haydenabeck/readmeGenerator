// REQUIRES //
const inquirer = require('inquirer');
const fs = require('fs');

// FUNCTIONALITY //
// This prompts the user for answers and creates the readme
inquirer
    // Questions asked
    .prompt([
        {
            type: 'input',
            message: 'Title:',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Description:',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Webpage URL:',
            name: 'webpage'
        },
        {
            type: 'input',
            message: 'How to install your project?',
            name: 'install'
        },
        {
            type: 'input',
            message: 'Instructions and examples for use.',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'If you had any collaborators, please list them with links to their GitHub profiles.',
            name: 'credits'
        },
        {
            type: 'input',
            message: 'Add guidelines here for others interested in contributing',
            name: 'contributions'
        },
        {
            type: 'input',
            message: 'Write tests for your application. Then write instructions on how to run them.',
            name: 'tests'
        },
        {
            type: 'list',
            message: 'Which license would you like to use?',
            choices: ['Unlicense', 'MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'BSD 2-clause', 'LGPLv3', 'AGPLv3'],
            name: 'license'
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        }
    ])
    // Write markdown file
    .then((response) => {
        // Write file and add title
        title();
        function title() {
            fs.writeFile('Generated-README.md', (
                `# ${response.title}\n`
            ), (err) => err ? console.error(err) : console.log('Readme created. Title added.'))
        }

        // Badges for license
        var licenseLink = '';
        badge();
        function badge() {
            // This switch adds a link later for the license section and creates a badge for the top of the page
            switch (response.license) {
                case 'MIT':
                    licenseLink = `[MIT License](https://opensource.org/licenses/MIT)`;
                    fs.appendFile('Generated-README.md', (
                        `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`
                    ), (err) => err ? console.error(err) : console.log('Badge added.'))
                    break;
                case 'Apache':
                    licenseLink = `[Apache License](https://www.apache.org/licenses/LICENSE-2.0)`;
                    fs.appendFile('Generated-README.md', (
                        `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n`
                    ), (err) => err ? console.error(err) : console.log('Badge added.'))
                    break;
                case 'GPLv2':
                    licenseLink = `[GPLv2 License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
                    fs.appendFile('Generated-README.md', (
                        `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)\n`
                    ), (err) => err ? console.error(err) : console.log('Badge added.'))
                    break;
                case 'GPLv3':
                    licenseLink = `[GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
                    fs.appendFile('Generated-README.md', (
                        `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n`
                    ), (err) => err ? console.error(err) : console.log('Badge added.'))
                    break;
                case 'LGPLv3':
                    licenseLink = `[LGPLv3 License](https://www.gnu.org/licenses/lgpl-3.0.en.html)`;
                    fs.appendFile('Generated-README.md', (
                        `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)\n`
                    ), (err) => err ? console.error(err) : console.log('Badge added.'))
                    break;
                case 'AGPLv3':
                    licenseLink = `[AGPLv3 License](https://www.gnu.org/licenses/agpl-3.0.en.html)`;
                    fs.appendFile('Generated-README.md', (
                        `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)\n`
                    ), (err) => err ? console.error(err) : console.log('Badge added.'))
                    break;
                case 'BSD 2-clause':
                    licenseLink = `[BSD 2-clause License](https://opensource.org/licenses/BSD-2-Clause)`;
                    fs.appendFile('Generated-README.md', (
                        `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)\n`
                    ), (err) => err ? console.error(err) : console.log('Badge added.'))
                    break;
                case 'BSD 3-clause':
                    licenseLink = `[BSD 3-clause License](https://opensource.org/licenses/BSD-3-Clause)`;
                    fs.appendFile('Generated-README.md', (
                        `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n`
                    ), (err) => err ? console.error(err) : console.log('Badge added.'))
                    break;
            }
        }

        // Description
        description();
        function description() {
            fs.appendFile('Generated-README.md', (
                `\n# Description\n ${response.description}\n`
            ), (err) => err ? console.error(err) : console.log('Description added.'))
        }

        // Table of Contents
        tableOfContents();
        function tableOfContents() {
            fs.appendFile('Generated-README.md', (
                `# Table of Contents\n` +
                `* [Webpage](#Webpage)\n` +
                `* [Install](#Install)\n` +
                `* [Usage](#Usage)\n` +
                `* [Credits](#Credits)\n` +
                `* [Usage](#Usage)\n` +
                `* [Contributions](#Contributions)\n` +
                `* [Tests](#Tests)\n` +
                `* [Questions](#Questions)\n` +
                `* [License](#License)\n`
            ), (err) => err ? console.error(err) : console.log('Table of contents added.'))
        }

        // Webpage, Installation, Usage, Credits, Contributions, Test and Questions
        misc();
        function misc() {
            fs.appendFile('Generated-README.md', (
                // Webpage Link
                `# Webpage\n ${response.webpage}\n` +

                // Installation
                `# Installation\n ${response.install}\n` +

                // Usage
                `# Usage\n ${response.usage}\n` +

                // Credits
                `# Credits\n ${response.credits}\n` +

                // Contributions
                `# Contributions\n ${response.contributions}\n` +

                // Test
                `# Test\n ${response.test}\n` +

                // Questions
                `# Questions\n You can reach me for any questions regarding this code at my email: ${response.email} or my github: ${response.github}\n` 
            ), (err) => err ? console.error(err) : console.log('misc added.'))
        }

        // License
        license();
        function license() {
            fs.appendFile('Generated-README.md', (
                `# License\n This repository is released under the ${licenseLink}\n`
            ), (err) => err ? console.error(err) : console.log('License added.'))
        }
    })