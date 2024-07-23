const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const newfile = data.split('\n').filter((line) => line.trim() !== '');
      const students = newfile.slice(1).map((line) => line.split(','));

      const NUMBER_OF_STUDENTS = students.length;
      console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

      const fields = {};
      for (const student of students) {
        const field = student[3];
        const firstname = student[0];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
