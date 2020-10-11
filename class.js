var team = /** @class */ (function () {
    function team() {
    }
    team.prototype.projectcompletion = function (days) {
        if (days <= 30) {
            console.log("The project has completed");
        }
        else {
            console.log("The project has not completed");
        }
    };
    return team;
}());
var ob1 = new team(); //object created
ob1.colleagues = "IOT BASED PROJECTS MEMBERS";
console.log(ob1.colleagues);
ob1.projectcompletion(25);
ob1.projectcompletion(45);
var ob2 = new team();
ob2.Projectmanager = "DATABASE PROJECTS";
console.log(ob2.Projectmanager);
ob2.projectcompletion(20);
