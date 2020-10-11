function Animal(legs) {
    this.legs = legs;
}
Animal.prototype.walk = function() {
    console.log('walking on ' + this.legs + ' legs');
}
console.log(Animal.prototype)
function Bird(legs) {
    Animal.call(this, legs);
}
Bird.prototype = Object.create(Animal.prototype);
console.log(Bird.prototype)
Bird.prototype.constructor = Animal;
console.log(Bird.prototype)
Bird.prototype.fly = function() {
    console.log('flying');
}
console.log(Bird.prototype)
var pigeon = new Bird(2);
pigeon.walk(); // walking on 2 legs
pigeon.fly(); // flying
console.log(pigeon.__proto__);
console.log(pigeon.__proto__.__proto__);