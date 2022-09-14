const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./utils/generateHTML.js");

// require class files
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
//const { validate } = require("@babel/types");

const employees = [];

let isTeamComplete = false;

const validateInput = (userInput) => {
  if (!userInput) {
    return "Please type your answer";
  } else {
    return true;
  }
};

const init = async () => {
  await createManager();

  if (!isTeamComplete) {
    console.log(isTeamComplete);

    const employeeRoleQuestion = [
      {
        type: "list",
        message: "Select desired employee role:",
        name: "employeeRole",
        choices: [{ name: "Engineer" }, { name: "Intern" }, { name: "None" }],
      },
    ];

    let { employeeRole } = await inquirer.prompt(employeeRoleQuestion);

    switch (employeeRole) {
      case "Engineer":
        createEngineer(employeeRole);
        console.log(employeeRole + " E");
        break;
      case "Intern":
        createIntern(employeeRole);
        console.log(employeeRole + " I");
        break;
      default:
        console.log("team complete 42");
        isTeamComplete = true;
    }

    // if (employeeRole === "None") {
    //   console.log("team complete 42");
    //   isTeamComplete = true;
    // } else {
    //   if (employeeRole === "Engineer") {
    //     createEngineer(employeeRole);
    //     console.log(employeeRole + " E");
    //   } else {
    //     if (employeeRole === "Intern") {
    //       createIntern(employeeRole);
    //       console.log(employeeRole + " I");
    //     }
    //   }
    // }
  } else {
    const indexHTML = generateHTML(employees);
    console.log("indexHTML " + indexHTML);

    fs.writeFileSync("index.html", indexHTML, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  }
};

const createManager = async () => {
  const managerQuestions = [
    {
      type: "input",
      message: "Enter manager name:",
      name: "name",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter employee ID:",
      name: "id",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter office number:",
      name: "officeNumber",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter your email address:",
      name: "email",
      validate: validateInput,
    },
  ];

  const managerAnswers = await inquirer.prompt(managerQuestions);
  const manager = new Manager(managerAnswers);
  employees.push(manager);
  return employees;
};

const createEngineer = async (employeeRole) => {
  console.log("employeeRole " + employeeRole);

  const engineerQuestions = [
    {
      type: "input",
      message: "Enter engineer name",
      name: "name",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter employee ID",
      name: "id",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter your email address",
      name: "email",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter your github username",
      name: "github",
      validate: validateInput,
    },
  ];

  const engineerAnswers = await inquirer.prompt(engineerQuestions);
  const engineer = new Engineer(engineerAnswers);
  employees.push(engineer);

  console.log(employees);

  return employees;
};

const createIntern = async (employeeRole) => {
  console.log("employeeRole " + employeeRole);

  const internQuestions = [
    {
      type: "input",
      message: "Enter intern name",
      name: "name",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter employee ID",
      name: "id",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter your email address",
      name: "email",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter your school name",
      name: "school",
      validate: validateInput,
    },
  ];

  const internAnswers = await inquirer.prompt(internQuestions);
  const intern = new Intern(internAnswers);
  employees.push(intern);

  console.log(employees);
  return employees;
};

init();
