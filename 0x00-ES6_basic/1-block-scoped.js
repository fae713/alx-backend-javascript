export default function taskBlock(trueOrFalse) {
    var task = false;
    var task2 = true;
  
    if (trueOrFalse) {
      const newTask = false;
      const newTask2 = true;
      task = newTask;
      task2 = newTask2;
    }
  
    return [task, task2];
  }
