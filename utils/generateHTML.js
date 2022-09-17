fs = require("fs");

function generateHTML(employees) {
  let cardStack = "";

  for (let employee of employees) {
    let info = "";
    for (const [key, value] of Object.entries(employee)) {
      // build items for card
      if (key === "name") {
        // name styling
        info =
          info +
          `<p class="flex-start p-2 text-xl bg-blue-900 text-white font-bold rounded"> ${value}</p>`;
      } else if (key === "email") {
        // email link
        info =
          info +
          `<p class="flex-wrap p-2 text-lg"> ${key} : <a class="underline text-blue-700" href="mailTo: ${value}?subject=Hello!" alt="${value}">${value}</a></p>`;
      } else if (key === "github") {
        //github link
        info =
          info +
          `<p class="flex-wrap p-2 text-lg"> ${key} : <a class="underline text-blue-700" href="https://github.com/" alt="${value}">${value}</a></p>`;
      } else {
        // other values
        info = info + `<p class="flex-wrap p-2 text-lg"> ${key} : ${value}</p>`;
      }
    }
    // build card
    let card = `<div class="flex justify-center m-3">
      <header class="border-solid border-2 border-black rounded bg-orange-300 w-2/5">
        ${info}
      </header>
    </div>`;
    // add card to stack
    cardStack = cardStack + card;
  }

  // build index.html
  const buildHTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
  </head>
  <body >
      <div class="flex-col align-center m-2 md:flex-row md:justify-center">
      <span class="flex justify-center text-6xl bolder italic">Team Profile</span>

      ${cardStack}
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
  </body>
  </html>
  `;

  // write to file
  fs.writeFile("./index.html", buildHTML, (err) =>
    err
      ? console.log("Error: could not write to file")
      : console.log("index.html created/updated")
  );
}

module.exports = generateHTML;
