const inquirer = require("inquirer");
const fs = require("fs");

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
        name: "managerName",
        message: "Team Manager Name",
        validate: validateInput,
      },
      {
        type: "input",
        name: "managerId",
        message: "Team Manager ID",
        validate: validateInput,
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Team Manager email",
        validate: validateInput,
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Office Number",
        validate: validateInput,
      },
    ])
    .then((e) => {
      const manager = new Manager(
        e.managerName,
        e.managerId,
        e.managerEmail,
        e.managerOfficeNumber
      );
      employees.push(manager);
      console.log("Manager added to roster!");
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
              name: "engineerName",
              message: "Employee Name",
            },
            {
              type: "input",
              name: "engineerId",
              message: "Employee ID",
            },
            {
              type: "input",
              name: "engineerEmail",
              message: "Employee email",
            },
            {
              type: "input",
              name: "engineerGithub",
              message: "Github username",
            },
          ])
          .then((e) => {
            const engineer = new Engineer(
              e.engineerName,
              e.engineerId,
              e.engineerEmail,
              e.engineerGithub
            );
            employees.push(engineer);
            console.log("Engineer added");
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
              name: "internName",
              message: "Employee Name",
            },
            {
              type: "input",
              name: "internId",
              message: "Employee ID",
            },
            {
              type: "input",
              name: "internEmail",
              message: "Employee email",
            },
            {
              type: "input",
              name: "internSchool",
              message: "School",
            },
          ])
          .then((e) => {
            const intern = new Intern(
              e.internName,
              e.internId,
              e.internEmail,
              e.internSchool
            );
            employees.push(intern);
            console.log("Intern added");
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
