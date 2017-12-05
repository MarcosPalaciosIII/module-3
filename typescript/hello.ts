class Greeter {
  // Typescript asks us to declare all the properties of a class
  // (we also have to specify the TYPE of the properties)
  message: string;

    constructor (message) {
      this.message =  message;
    }

    sayHi() {
      return this.message.toUpperCase();
    }
}


const myGreeter = new Greeter("Hello, world!");

console.log( myGreeter );

console.log( myGreeter.sayHi() );
