//stdin
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Take input from stdin
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  // Print user input to console
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
    process.exit();
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
