const fs = require('fs');

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');

    const students = lines.slice(1).reduce((acc, line) => {
      const student = line.split(',');
      const field = student[student.length - 1];
      if (!acc[field]) acc[field] = [];
      acc[field].push(student[0]);
      return acc;
    }, {});

    resolve(students);
  });
});

export default readDatabase;
module.exports = readDatabase;
