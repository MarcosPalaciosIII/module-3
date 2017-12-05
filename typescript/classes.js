var Soldier = (function () {
    // soldiers have these properties:
    // (it's required in Typescript to list out your properties)
    // health: number;
    // strength: number;
    // use "public" to trigger the shortcut
    //(avoids having to write properties 3 times)
    function Soldier(health, strength) {
        this.health = health;
        this.strength = strength;
        // this.health = health;
        // this.strength = strength;
    }
    Soldier.prototype.receiveDamage = function (dmg) {
        this.health -= dmg;
    };
    return Soldier;
}());
// const mySoldier = new Soldier(100, 25);
var Viking = (function () {
    // name: string;
    // health: number;
    // strength: number;
    // use "public" to trigger the shortcut
    //(avoids having to write properties 3 times)
    function Viking(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        // this.name = name;
        // this.health = health;
        // this.strength = strength;
    }
    Viking.prototype.receiveDamage = function (dmg) {
        this.health -= dmg;
        console.log("FOR ODIN!");
    };
    return Viking;
}());
var Samurai = (function () {
    function Samurai(sword, health, strength) {
        this.sword = sword;
        this.health = health;
        this.strength = strength;
    }
    Samurai.prototype.receiveDamage = function (dmg) {
        this.health -= dmg;
        console.log("You fight honorably.");
    };
    return Samurai;
}());
var mySoldier = new Soldier(100, 25);
var ragnarr = new Viking("Ragnarr", 100, 25);
var hanzo = new Samurai("Nodachi", 100, 25);
console.log(hanzo.health);
function fight(warriorA, warriorB) {
    warriorA.receiveDamage(warriorB.strength);
    warriorB.receiveDamage(warriorA.strength);
    console.log("After the fight: " + warriorA.health + " vs " + warriorB.health);
}
fight(ragnarr, hanzo);
fight(mySoldier, ragnarr);
var PacifistHippie = (function () {
    function PacifistHippie(health, cause) {
        this.health = health;
        this.cause = cause;
    }
    PacifistHippie.prototype.receiveDamage = function (dmg) {
        this.health -= dmg;
        console.log("Ow that hurts, man!");
    };
    return PacifistHippie;
}());
var sunFlower = new PacifistHippie(50, "The Rainforest");
// fight(sunFlower, ragnarr);
