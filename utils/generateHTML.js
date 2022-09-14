// imports
const fs = require("fs");
const path = require("path");
const templatesFolder = path.resolve(__dirname, "../src");
console.log(templatesFolder);

const generateHTML = (employees) => {
  console.log(employees);
  const HTML = [];

  HTML.push(
    employees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => renderManager(manager))
  );

  HTML.push(
    employees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => renderEngineer(engineer))
  );

  HTML.push(
    employees
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => renderIntern(intern))
  );
  return renderHTML(HTML.join(""));
};

const renderManager = (manager) => {
  console.log("render manager");
  let template = fs.readFileSync(
    path.resolve(templatesFolder, "manager.html"),
    "utf8"
  );

  template = replaceTemplates(template, "name", manager.getName());
  template = replaceTemplates(template, "id", manager.getId());
  template = replaceTemplates(template, "email", manager.getEmail());
  template = replaceTemplates(template, "role", manager.getRole());
  template = replaceTemplates(
    template,
    "officeNumber",
    manager.getofficeNumber()
  );
  return template;
};

function renderEngineer() {
  let template = fs.readFileSync(
    path.resolve(templatesFolder, "engineer.html"),
    "utf8"
  );

  template = replaceTemplates(template, "name", engineer.getName());
  template = replaceTemplates(template, "id", engineer.getId());
  template = replaceTemplates(template, "email", engineer.getEmail());
  template = replaceTemplates(template, "role", engineer.getRole());
  template = replaceTemplates(template, "github", engineer.getGithub());
  return template;
}

function renderIntern() {
  let template = fs.readFileSync(
    path.resolve(templatesFolder, "intern.html"),
    "utf8"
  );

  template = replaceTemplates(template, "name", intern.getName());
  template = replaceTemplates(template, "id", intern.getId());
  template = replaceTemplates(template, "email", intern.getEmail());
  template = replaceTemplates(template, "role", intern.getRole());
  template = replaceTemplates(template, "school", intern.getSchool());
  return template;
}

const renderHTML = (HTML) => {
  let template = fs.resolve(templatesFolder, "full-markdown.html", "utf8");
};

const replaceTemplates = (template, placeholder, value) => {
  const pattern = new RegExp(`{{$(placeholder)}}`, "gm");
  return template.replace(pattern, value);
};

module.exports = generateHTML;
