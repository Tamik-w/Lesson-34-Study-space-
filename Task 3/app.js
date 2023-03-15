import employees from "./consts/employees.js"
import * as employeesMethods from "./methods.js"

console.log(`Total Salary: ${employeesMethods.totalSalary(employees)}`)
console.log(`Department Quantity: ${employeesMethods.departmentQuantity(employees)}`)
employeesMethods.departmentSalary(employees);