//var var_name function([arguments]) {.....}  //anonymous function
var mul = function () {
    var a = 5;
    var b = 4;
    return a * b;
};
console.log(mul());
var sub = function (p, q) {
    var r = p - q;
    return r;
};
console.log(sub(9, 3));
//lamda function
var add = function (x, y) {
    return x + y;
};
console.log(add(3, 4));
