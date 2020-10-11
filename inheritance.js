var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hospital = /** @class */ (function () {
    function hospital(id, name) {
        this.patientid = id;
        this.patientname = name;
    }
    hospital.prototype.consultanttime = function () {
        console.log("CONSULTING HOURS :" + this.ct);
    };
    return hospital;
}());
var doctor = /** @class */ (function (_super) {
    __extends(doctor, _super); //singleinheritance
    function doctor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    doctor.prototype.display = function () {
        console.log("PATIENT ID:" + this.patientid);
        console.log("PATIENT NAME:" + this.patientname);
        console.log("DOCTOR NAME:" + this.doctorname);
    };
    return doctor;
}(hospital //singleinheritance
));
var medicaldetails = /** @class */ (function (_super) {
    __extends(medicaldetails, _super); //multilevel inheritance
    function medicaldetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    medicaldetails.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Medical problem :" + this.medicalpblm);
    };
    return medicaldetails;
}(doctor //multilevel inheritance
));
var intime = /** @class */ (function (_super) {
    __extends(intime, _super); //hierarchial inheritance
    function intime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    intime.prototype.consultanttime = function () {
        _super.prototype.consultanttime.call(this);
    };
    return intime;
}(hospital //hierarchial inheritance
));
var obj1 = new medicaldetails(104, "kumar"); //invoke variable declared in  above class
obj1.medicalpblm = "Diabetes";
obj1.doctorname = "Dr.karthick";
obj1.ct = "9.30 AM";
obj1.display(); // invoking method from class
obj1.consultanttime();
