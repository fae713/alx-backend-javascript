interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Modified createEmployee function to accept an additional parameter for the role
function createEmployee(role: "director" | "teacher", salary: number | string): Director | Teacher {
    if (role === "director") {
        return new Director();
    } else if (role === "teacher") {
        return new Teacher();
    }
}

// Task 6: Implementing isDirector and executeWork functions
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

// Task 7: String literal types
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    switch (todayClass) {
        case "Math":
            return "Teaching Math";
        case "History":
            return "Teaching History";
        default:
            throw new Error("Invalid subject");
    }
}
