const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter your project description.',
      name: 'description',
    },
    {
      type: 'list',
      message: 'Enter your Table of Contents:',
      name: 'ToC',
    },
    {
    type: 'input',
    message: 'Enter your Installation.',
    name: 'installation',
    },
    {
    type: 'Input',
    message: 'Explain the usage of your project.',
    name: 'usage',
    },
    {
    // should this be a list or checkboxes
    type: 'Input',
    message: 'Enter your license:', 
    name: 'license',
    },
  ])

//   title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions



  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('Look at your ReadMe!')
  );