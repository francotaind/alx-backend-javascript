process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("data", (data) => {
  const name = data.toString().trim(); // Get user input and trim any extra whitespace
  console.log(`Your name is: ${name}`);
  process.exit(); // Exit the program
});

process.on("exit", () => {
  console.log("This important software is now closing");
});
