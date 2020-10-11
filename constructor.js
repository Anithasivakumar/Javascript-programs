var student = /** @class */ (function () {
    function student(N, R) {
        this.stname = N;
        this.rollno = R;
    }
    student.prototype.score = function (mark) {
        if (mark >= 45)
            console.log("pass mark:" + mark);
        else
            console.log("fail mark:" + mark);
    };
    return student;
}());
var ob1 = new student("Anitha", 4);
console.log(ob1.stname);
console.log(ob1.rollno);
ob1.score(90);
ob1.score(40);
