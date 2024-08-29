const getStudentIdsSum = (students) => students.reduce((accumulator, student) => accumulator + student.id, 0);

export default getStudentIdsSum;
