// Write your solution in this file!
let employee = {
    name : "Sam",
    streetAddress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const anotherObject = {...employee};
    anotherObject[key] = value;
    return anotherObject
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]= value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key){
    const anotherObject = {...employee};
    delete anotherObject[key];
    return anotherObject;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}
