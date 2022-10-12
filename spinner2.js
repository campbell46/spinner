const spinner = '|/-\\|/-\\|';

for (let i = 0, j = 100; i < spinner.length; i++, j += 200) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i]}   `);
  }, j);
}