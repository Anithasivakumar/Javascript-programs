function add(a, b)        //function with arguments
{
 c=a+b
 console.log(c)
}
add(3,6)                // function call
function display(rno,nam) //declaring variables
{
  this.rollno=rno;
  this.name=nam;
  console.log(rno);
  console.log(nam);
  this.details=function(){         //function with objects
  console.log("ROLLNO:"+this.rollno)
  console.log("NAME:"+this.name)
  }
}
var ob1=new display(1,"ANITHA")
);
function animal(nam,sen,no)
{
  this.name=nam
  this.sense=sen 
  this.legs=new legs(no)
}
function legs(no){
  this.nooflegs=no
}
var cow=new animal("COW","5 SENSE",4)
console.log(cow.__proto__)
var goat=cow.legs
//console.log(goat)
//cow.legs.nooflegs="four"
//console.log(cow)
//console.log(goat)
var cat=Object.assign({},cow) //shallow copy
//animal.prototype.eyes="TWO"    //prototype to function
//cat.__proto__.tail="ONE"
//cat.food="FISH"
//cat.legs.nooflegs="four"
//cat.__proto__=animal.prototype //sc prints the properties with new value but objects with old bcoz its a reference ptr
//console.log(cat)
console.log(cat.__proto__)
var dog=dc(cat)
function dc(ob1)         //ob1 =old object,ob2 =new object,dc=deepcopy
{
    var ob2=Object.assign({},ob1)      //all values ob1 is fully copied to ob2
    Object.keys(ob1).forEach(key=>{
        if(typeof ob1[key]==="Object")    // if key of ob1 is an object will be deep copied through function
        {
            ob2[key]=dc(ob1[key])  //object values alone copied 
        }
    })
    ob2.__proto__=ob1.__proto__
    return ob2                    // remaining values  are returned
}
//console.log(dog)
 console.log(dog.__proto__)