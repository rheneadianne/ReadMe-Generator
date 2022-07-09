const getLicense = license => {
    license = license[0]
    let licenseIMG = ""
    license === 'MIT License'? 
        licenseIMG = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`:
    license === 'Apache Licence 2.0'?
        licenseIMG = `"[![License: Apache 2.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"`:
        licenseIMG = `"[![License: GNU General Public v3.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"`
}

export function generate(data) {
    const {title, description, installation, usage, contributed, contribution, testing, license, gitUser, email} = data
    const licenseUsed = getLicense(license)

    return `
    #${title}

    ${licenseUsed}
    
    [${title}](#${title})
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributions](#contributions)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)


    ## Description
    ${description}

    ## Installation
    ${installation}

    ## Usage 
    ${usage}

    ## Contributing 
    ${contribution}

    ## Tests
    ${testing}
    
    ## GitHub and Contact
    GitHub: [github.com/${gitUser}](https://github.com/${gitUser})
    Email:  [${email}](mailto:${email})

    ## Contribution
    Made with ❤️ by ${contributed}
    `
}

