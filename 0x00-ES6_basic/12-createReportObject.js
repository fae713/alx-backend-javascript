export default function createReportObject(employeesList) {
  const allEmployees = {};
  for (const department in employeesList) {
    if (Object.prototype.hasOwnProperty.call(employeesList, department)) {
      const cleanDepartmentName = department;
      allEmployees[cleanDepartmentName] = employeesList[department];
    }
  }
  const getNumberOfDepartments = function getNumberOfDepartments() {
    return Object.keys(allEmployees).length;
  };
  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
