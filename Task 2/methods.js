function totalSalary (employees) {
    let totalSum = 0;
    employees.forEach(element => {
        totalSum += element.salary;
    });
    return totalSum
}

function departmentQuantity(employees) {
    let departmentQuantity = 0;
    employees.forEach(element => {
        if(element.department) {
            departmentQuantity++;
        }
    });
    return departmentQuantity
}

export {
    totalSalary,
    departmentQuantity,
};