export default function createIteratorObject(report) {
  let employees = [];
  for (const department of Object.values(report.allEmployees)) {
    employees = employees.concat(department);
  }
  function* generator(array) {
    for (const item of array) {
      yield item;
    }
  }

  return generator(employees);
}
