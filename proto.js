function supermarket(thngs,bb,oo){
    this.things=thngs
    this.bill=bb
    this.offer=oo
}
var ob1=new supermarket("Refinedoil",500,"5%")
ob1.material="cooking oil"                //this property is accessed only by ob1 not public
console.log(ob1.material)                          
supermarket.prototype={GST:"2%",qunatity:"5 kg/lt"}    // creating new properties for object
supermarket.prototype.qunatity="3kg/lt"                //overwriting the existing property
ob1.prototype.GST="bigbazzar"
ob1.__proto__.quantity="B" 
ob1.__proto__.quantity="Bigbasket"              //we can also prototype obj as .prototype or __proto__
var ob2=new supermarket("Wheat flour","200","2%")
var ob3=new supermarket("Sugar","150","2%")
//console.log(ob2.material)    //undefined
//console.log(ob1.GST+" "+ob1.qunatity) //undefined becuse prototype is after creating ob1
//console.log(ob2.GST+" "+ob2.qunatity)  
//console.log(ob3.GST+" "+ob3.qunatity) 
//console.log(supermarket.prototype)
console.log(ob2)



