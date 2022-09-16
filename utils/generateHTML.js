fs = require("fs");

function generateHTML(employees) {
  console.log(employees);

  let cardStack = "";

  for (let employee of employees) {
    let info = "";
    for (const [key, value] of Object.entries(employee)) {
      if (key === "name") {
        // name styling
        info =
          info +
          `<p class="flex-start p-2 text-xl bg-blue-600 text-white font-bold rounded"> ${value}</p>`;
      } else {
        // +++ add email & github links
        info = info + `<p class="flex-wrap p-2 text-lg"> ${key} : ${value}</p>`;
      }
    }
    let card = `<div class="bg-orange-200 m-2">
      <header class="border-solid border-2 border-black rounded">
        ${info}
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
  </head>
  <body >
      <div class="flex justify-center m-2 w-250">

      ${cardStack}
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
  </body>
  </html>
  `;

  fs.writeFile("./index.html", template, (err) =>
    err
      ? console.log("Error: could not write to file")
      : console.log("index.html created/updated")
  );
}

module.exports = generateHTML;
