const spinner = '|/-\\|/-\\|';

//loop through spinner characters, setting an accumulating timer for each one
for (let i = 0, j = 100; i < spinner.length; i++, j += 200) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i]}   `);
  }, j);
}