const employee = {  
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newO = {...employee};

    newO[key] = value;

    return newO;    
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newObj= {...employee};
    delete newObj[key];
    return newObj
}
 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}



  