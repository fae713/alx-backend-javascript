const fs = require('fs');

function countStudents(path) {
  let content;

  try {
    content = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = content.split('\n').filter((line) => line.trim() !== '');
  const students = lines.slice(1).map((line) => line.split(','));

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
}

module.exports = countStudents;
