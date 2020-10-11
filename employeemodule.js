"use strict";
exports.__esModule = true;
exports.employee = void 0;
var employee = /** @class */ (function () {
    function employee(id, name) {
        this.empid = id;
        this.empname = name;
    }
    employee.prototype.display = function (workingdays) {
        if (workingdays >= 30)
            console.log("THE SALARY NEED TO NEED TO BE CREDIT IN EMPLOYEE ACCOUNT");
    };
    return employee;
}());
exports.employee = employee;
