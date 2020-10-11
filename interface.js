var student = /** @class */ (function () {
    function student(stdtname, stdtrollno, DEPT) {
        this.name = stdtname;
        this.rollno = stdtrollno;
        this.dept = DEPT;
    }
    student.prototype.getname = function () {
        return this.name;
    };
    student.prototype.getrollno = function () {
        return this.rollno;
    };
    student.prototype.getdept = function () {
        return this.dept;
    };
    student.prototype.checkresult = function (im) {
        if (im >= 14) {
            console.log("THE RESULT IS PASS");
        }
        else {
            console.log("THE RESULT IS PASS");
        }
    };
    return student;
}()); //using the class implements the interface
var obj = new student("S.ANITHA", 4, "CSE");
var a = obj.getname();
var b = obj.getrollno();
var c = obj.getdept();
console.log("STUDENT:" + a + "\nROLLNO:" + b + "\nDepartment:" + c);
var d = obj.checkresult(19);
