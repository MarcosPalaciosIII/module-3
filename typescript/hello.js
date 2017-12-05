var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.sayHi = function () {
        return this.message.toUpperCase();
    };
    return Greeter;
}());
var myGreeter = new Greeter("Hello, world!");
console.log(myGreeter);
console.log(myGreeter.sayHi());
