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

function departmentSalary (employees) {

    const allSalaries = {
        frontend: 0,
        backend: 0,
        design: 0,
        sales: 0,
    };
    
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        allSalaries[employee.department] += employee.salary;
    }
    
    console.log(allSalaries);
}

export {
    totalSalary,
    departmentQuantity,
    departmentSalary,
};