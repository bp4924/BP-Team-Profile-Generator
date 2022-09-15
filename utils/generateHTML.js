fs = require("fs");

function generateHTML(employees) {
  // accepts list of classes, generate cards, insert into template, save local
  console.log(employees);

  let cardStack = "";

  // construct cards, iterate through key and value
  for (let employee of employees) {
    let info = "";
    for (const [key, value] of Object.entries(employee)) {
      info = info + `<p class="card-header-title">${key}: ${value}</p>`;
    }
    let card = `<div class="card">
      <header class="card-header">
        ${info}
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
    </div>`;
    cardStack = cardStack + card;
  }

  // construct template, insert cards
  const template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
  </head>
  <body style="display:flex">
      <div style="flex-wrap:wrap;margin:5%;padding:5%;">${cardStack}</div>
  </body>
  </html>
  `;

  fs.writeFile("./TeamProfile.html", template, (err) =>
    err ? console.log("Error writing to file") : console.log("Created file")
  );
}

module.exports = generateHTML;
