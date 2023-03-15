function totalSalary (employees) {
    let totalSum = 0;
    employees.forEach(element => {
        totalSum += element.salary;
    });
    return totalSum
}

export {totalSalary};