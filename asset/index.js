// imports
const inquirer = require("inquirer");
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
    type: "input",
    message: "What license was used for this README?",
    name: "License",
  },
  {
    type: "input",
    message: "Please add all contributors",
    name: "Contributor",
  },
  {
    type: "input",
    message: "What command will you use to test this App?",
    name: "Test",
  }
];

// Writing to a file 
function writeToFile(fileName, data) {

fs.writeFile("./demo/"+fileName, data, function(err) {
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
    writeToFile("DemoREADME.md", generatorMarkdown(data));
  })
}

// run the app
init();
