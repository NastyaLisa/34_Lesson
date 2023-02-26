// export
function totalSalary(employees) {
  let totalSalary = 0;
  for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].salary;
  }
  return totalSalary;
}

// export
function totalSalary2(employees) {
  return employees.reduce((totalSalary2, employee) => {
    return totalSalary2 + employee.salary;
  }, 0);
}

// export
function departmentsQauntity(employees) {
  const departments = new Set(employees.map((employee) => employee.department));
  return departments.size;
}

// export
function departmentsSalary(employees) {
  const salariesByDepartment = new Map();
  for (const employee of employees) {
    const department = employee.department;
    const salary = employee.salary;
    if (salariesByDepartment.has(department)) {
      salariesByDepartment.set(
        department,
        salariesByDepartment.get(department) + salary
      );
    } else {
      salariesByDepartment.set(department, salary);
    }
  }
  return Object.fromEntries(salariesByDepartment);
}

export { totalSalary, departmentsQauntity, departmentsSalary };
