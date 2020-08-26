const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const init = async() => {
    const responses = await inquirer.prompt([{
            type: "input",
            message: "What is your programs name?",
            name: "name",
        }, {
            type: "input",
            message: "Whats the problem your solving with this app?",
            name: "userproblem",
        },
        {
            type: "input",
            message: "How do you use this app?",
            name: "instructions",
        }, {
            type: "input",
            message: "Install",
            name: "linkhere",
        }
    ]).then(function(responses) {
        const readMe = `# ${responses.name}
# ${responses.userproblem}
# ${responses.instructions}
# ${responses.linkhere}
                            `;
        writeFileAsync("./README.md", readMe);
        console.log("README generated successfully!");
    })
};

init();