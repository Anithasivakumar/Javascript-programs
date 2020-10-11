function vehicle(nos,now)
{
  this.numberofseats = nos
  this.numberofwheels=now
}
vehicle.prototype.print = function () {
  console.log("No of seats :"+this.numberofseats)
  console.log("No of wheels :"+this.numberofwheels)
}
//vehicle.prototype.print()
var v=new vehicle(1,4)
//console.log(v)
function car(scolor,nos,now)
{
  vehicle.call(this,nos,now)
  this.SteeringWheelcolor=scolor
}
car.prototype= new vehicle()
car.prototype.constructor=car
//console.log(car.prototype)
//console.log(car.prototype.constructor)
var c =new car("black",1,2)
console.log(c)
function bike(hb,wd)
{
  this.handlebar=hb
  this.width=wd
}
bike.prototype= new car()
bike.prototype.constructor=bike
//console.log(bike.prototype)
//console.log(bike.prototype.constructor)
var b =new bike(2,30)
console.log(b)

console.log(a)                              //undefined
console.log(b)                               //cannot acces b before inttialization
console.log(c)                                //cannot acces c before inttialization
var a=5;
let b="hi"
const c="92"
f1();
f2();
f3(); 
 f4();
function f1(){
  console.log("hi")
}
var f2=function()                 //f2 is not a function
{
  console.log("Hello")
}
let f3=function()                       //cannot acces f3 before inttialization
{
  console.log("welcome")
}
const f4=function()                           //cannot acces f4 before inttialization
{
  console.log("Thank you")
}

let k=5
function print()
{
  if(k>=3){
  let a=4;
  var b=5;
  const c=6;
  d=8
  console.log(a)             //let is block scope
  //console.log(b)          //  var can also print in block scope
  console.log(c)           //const is block scope
  }
  console.log(b)    // var is function scope
}
print()
console.log(d)



