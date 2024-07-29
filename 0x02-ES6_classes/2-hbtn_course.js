export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // name getter
  get name() {
    return this._name;
  }

  // name setter
  set name(value) {
    if (typeof (value) !== 'string') { throw TypeError('Name must be a string'); }
    this._name = value;
  }

  // length getter
  get length() {
    return this._length;
  }

  // setter for length
  set length(value) {
    if (typeof (value) !== 'number') { throw TypeError('Length must be a number'); }
    this._length = value;
  }

  // getter for students
  get students() {
    return this._students;
  }

  // setter for students
  set students(value) {
    if (!Array.isArray(value)) { throw TypeError('students must be an Array'); } else {
      value.forEach((item) => { if (typeof item !== 'string') { throw TypeError('students must contain string'); } return true; });
    }
    this._students = value;
  }
}
