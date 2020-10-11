function student(rno,nam,clg,dt)
{
    this.rollno=rno;
    this.name=nam;
    this.college=clg;
    this.depart=dt
}
function department(ABB,Exp)
{
    this.Abbreviation=ABB;
    this.Expansion=Exp;
}
var dept=new department("CSE","ComputerScienceandEngineering")
var anitha=new student(04,"ANITHA","TCE",Object.assign({},dept))    //function department object's properties are assign to student function objects
console.log(anitha)
var mowni=Object.assign({},anitha) //full deep copy anitha object to mowni object
mowni.rollno=15 //updating values
mowni.name="MOWNICA" 
mowni.college="TCE" 
mowni.depart.Abbreviation="ECE"
mowni.depart.Expansion="Electronics and Communication Engineering"
console.log(mowni)
var lavanya = deepcopy(anitha)                  //deepcopy anitha to lavanya
function deepcopy(obj){                               // function for deep copy  
    var newobj=Object.assign({},obj)              
    Object.keys(obj).forEach(key=>{
    if(typeof obj[key]==="object"){
        newobj[key]=deepcopy(obj[key])
    }
})
return newobj
}
lavanya.name="LAVANYA"
lavanya.rollno=201
lavanya.college="TCE"
lavanya.depart.Abbreviation="ECE"
lavanya.depart.Expansion="Electronics and Communication Engineering"
console.log(lavanya)