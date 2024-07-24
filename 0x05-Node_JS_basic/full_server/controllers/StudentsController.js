import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const databaseFile = process.argv[2];
    readDatabase(databaseFile)
      .then((students) => {
        let result = 'This is the list of our students\n';
        const fields = Object.keys(students).sort();
        fields.forEach((field) => {
          result += `Number of students in ${field}: ${students[field].length}. 
          List: ${students[field].join(', ')}\n`;
        });
        response.status(200).send(result.trim());
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const databaseFile = process.argv[2];
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    return readDatabase(databaseFile)
      .then((students) => {
        const studentList = students[major];
        if (studentList) {
          response.status(200).send(`List: ${studentList.join(', ')}`);
        } else {
          response.status(200).send('List: ');
        }
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
