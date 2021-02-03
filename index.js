const chalk = require("chalk");
const readline = require("readline");

var address = "https://postman-echo.com/post";
var time = "1000";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  chalk.cyan(
    "\nPlease enter the request URL where the POST requests should be sent!: "
  ),
  answer => {
    if (answer != "") {
      address = answer;
    }
    rl.question(
      chalk.cyan(
        "\nPlease enter the delay for each request (in milliseconds): "
      ),
      answer => {
        if (answer != "") {
          time = answer;
        }
        rl.close();
        start();
      }
    );
  }
);

function start() {
  console.log(chalk.green("\nLetz Fuck em' boiz!"));
  require("./spam.js").startSpamming(address, time);
}
