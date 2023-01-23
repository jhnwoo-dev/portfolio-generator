const fs = require("fs");
const inquirer = require("inquirer");

const generateHTML = ({ username, fact, github, linkedin, location }) => {
    return ` 
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Portfolio Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    
    
    <body>
        <section class="hero is-info is-large">
            <div class="hero-head">
            </div>
    
            <div class="hero-body">
                <div class="container has-text-centered">
                    <p class="title">
                        ${username}
                    </p>
                    <p class="subtitle">
                        ${fact}
                    </p>
                    <p class="subtitle">
                        I am located in ${location}!
                    </p>
                </div>
            </div>
    
            <div class="hero-foot">
                <nav class="tabs is-boxed is-fullwidth">
                    <div class="container">
                        <ul>
                            <li class="is-active">
                                <a href="https://github.com/${github}/" target="_blank">GitHub</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/${linkedin}/" target="_blank">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    </body>
    
    </html>
    `;
};

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your full name?",
            name: "username",
        },
        {
            type: "input",
            message: "Tell us a fun fact!",
            name: "fact",
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github",
        },
        {
            type: "input",
            message: "What is your LinkedIn username?",
            name: "linkedin",
        },
        {
            type: "input",
            message: "Where are you located?",
            name: "location",
        },
    ])
    .then((response) =>
        fs.writeFile("index.html", generateHTML(response), (err) =>
            err ? console.error(err) : console.log("Info logged!")
        )
    );
