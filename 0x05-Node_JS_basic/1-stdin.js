// stdin task
console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf-8');

// Read the user's input
process.stdin.on('data', (input) => {
  // Display the user's name
  console.log(`Your name is: ${input}`);

  // Close the input stream
  process.stdin.end();
});

// When the input stream is closed
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
