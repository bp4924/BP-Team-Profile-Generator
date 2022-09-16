const inquirer = require("inquirer");
//const fs = require("fs");

const generateHTML = require("./utils/generateHTML.js");

// require class files
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const { validate } = require("@babel/types");

const employees = [];

const validateInput = (userInput) => {
  if (!userInput) {
    return "Please type your answer";
  } else {
    return true;
  }
};

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Team Manager Name",
        validate: validateInput,
      },
      {
        type: "input",
        name: "id",
        message: "Team Manager ID",
        validate: validateInput,
      },
      {
        type: "input",
        name: "email",
        message: "Team Manager email",
        validate: validateInput,
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Office Number",
        validate: validateInput,
      },
    ])
    .then((e) => {
      const manager = new Manager(e.name, e.id, e.email, e.officeNumber);
      employees.push(manager);
      console.log("Added a Manager for the team");
      console.log(employees);
    })
    .then(() => addEmployee());
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "Select an employee role to add, or generate the HTML",
        choices: ["Engineer", "Intern", "Generate HTML"],
      },
    ])
    .then((e) => {
      if (e.options === "Generate HTML") {
        generateHTML(employees);
        return;
      } else if (e.options === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "Employee Name",
              validate: validateInput,
            },
            {
              type: "input",
              name: "id",
              message: "Employee ID",
              validate: validateInput,
            },
            {
              type: "input",
              name: "email",
              message: "Employee email",
              validate: validateInput,
            },
            {
              type: "input",
              name: "github",
              message: "Github username",
              validate: validateInput,
            },
          ])
          .then((e) => {
            const engineer = new Engineer(e.name, e.id, e.email, e.github);
            employees.push(engineer);
            console.log("Added an Engineer to the team");
            console.log(employees);
          })
          .then(() => {
            addEmployee();
          });
      } else if (e.options === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "Employee Name",
              validate: validateInput,
            },
            {
              type: "input",
              name: "id",
              message: "Employee ID",
              validate: validateInput,
            },
            {
              type: "input",
              name: "email",
              message: "Employee email",
              validate: validateInput,
            },
            {
              type: "input",
              name: "school",
              message: "School",
              validate: validateInput,
            },
          ])
          .then((e) => {
            const intern = new Intern(e.name, e.id, e.email, e.school);
            employees.push(intern);
            console.log("Added an Intern to the team");
            console.log(employees);
          })
          .then(() => {
            addEmployee();
          });
      }
    })
    .catch(() => console.log("Application Complete."));
}

addManager();
