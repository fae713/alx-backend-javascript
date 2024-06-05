interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
  

  //Task 2
  interface Directors extends Teacher  {
    numberOfReports: number;
  };
  
  const director1: Directors = {
    firstName: 'John',
    fullTimeEmployee: true,
    lastName: 'Doe',
    location: 'London',
    numberOfReports: 17,
  };
  
  console.log(director1);
  

  // Task 3
  function printTeacher(firstName: string, lastName: string): string{
  return `${firstName.charAt(0)}.${lastName}`;
  }
  console.log(printTeacher("John", "Doe"));
  
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  

  //Task 4
  interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
  }
  
  class StudentClass {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
   workOnHomework(): string {
   return "Currently working";
  }
  
    displayName(): string {
      return this.firstName;
    }
  }
  