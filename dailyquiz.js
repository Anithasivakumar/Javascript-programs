const arr1=['a','b','c'];
const arr2=['b','c','a'];
console.log(
    arr1.sort()===arr1,
    arr2.sort()==arr1,
    arr1.sort()===arr2.sort()
);

((fn,val)=>{
    return fn(val);
})(console.log,5);

dis();
var dis;
function dis()
{
    console.log("first")
}
dis=function()
{
    console.log("second")
};

foo();
function foo()
{
    console.log(1);
}
var foo = function()
{
    console.log(2);
};
function foo()
{
    console.log(3);
}
foo(); 
