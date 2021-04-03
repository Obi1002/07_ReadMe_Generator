// imports
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js")
const fs = require("fs"); 

// Questions asked to the user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "UserName",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "Email",
  },
  {
    type: "input",
    message: "What is the title for your project?",
    name: "Title",
  },
  {
    type: "input",
    message: "Please provide the description of your project.",
    name: "Description",
  },
  {
    type: "input",
    message: "What requried dependencies should be installed to run this app?",
    name: "Installation",
  },
  {
    type: "input",
    message: "What is purpose of this app?",
    name: "Usage",
  },
  {
    type: "list",
    message: "What license was used for this README?",
    name: "License",
    choices: ['MIT', 'GNU']
  },
  {
    type: "input",
    message: "Please add all contributors:",
    name: "Contributor",
  },
  {
    type: "input",
    message: "What command will you use to test this App?",
    name: "Test",
  },
  {
    type: "input",
    message: "Do you have any questions about this App?",
    name: "Questions",
  }
];

// Writing to a file 
function writeToFile(fileName, data) {

fs.writeFile("./READMEdata/"+fileName, data, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log ("Successfully wrote: " + fileName);
})

}

// initialization function
function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile("DemoREADME.md", generateMarkdown(data));
  })
}

// run the app
init();
