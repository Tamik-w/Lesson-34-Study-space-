import {employees} from "./consts/employees.js"
import * as employeesService from "./methods.js"

console.log(`Total Salary: ${employeesService.totalSalary(employees)}`)
console.log(`Department Quantity: ${employeesService.departmentQuantity(employees)}`)