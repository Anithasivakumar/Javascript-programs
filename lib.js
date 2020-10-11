var library;
(function (library) {
    function studentdetails(name, rollno, dept) {
        console.log("NAME IS:" + name);
        console.log("ROLL NO IS:" + rollno);
        console.log("DEPARTMENT IS :" + dept);
    }
    library.studentdetails = studentdetails;
    var bookdetails = /** @class */ (function () {
        function bookdetails(id, no) {
            this.bookidno = id;
            this.noofbooks = no;
        }
        bookdetails.prototype.bookuser = function () {
            if (this.noofbooks > 4)
                console.log("Books will not be taken from library");
            else
                console.log("Enjoy the freedom of learning");
        };
        return bookdetails;
    }());
    library.bookdetails = bookdetails;
})(library || (library = {}));
/// <reference path= "namespace.ts" />
var user = library.studentdetails("ANITHA", "16cs04", "CSE"); //function call fromm namespace file
var obj1 = new library.bookdetails(23511, 6);
obj1.bookuser();
