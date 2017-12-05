class Soldier implements WarriorInterface {
  // soldiers have these properties:
  // (it's required in Typescript to list out your properties)
  // health: number;
  // strength: number;

  // use "public" to trigger the shortcut
  //(avoids having to write properties 3 times)
  constructor(
    public health:number,
    public strength:number
  ) {
    // this.health = health;
    // this.strength = strength;
  }
  receiveDamage(dmg: number) {
    this.health -= dmg;
  }
}

// const mySoldier = new Soldier(100, 25);

class Viking implements WarriorInterface {
  // name: string;
  // health: number;
  // strength: number;

  // use "public" to trigger the shortcut
  //(avoids having to write properties 3 times)
  constructor(
    public name: string,
     public health:number,
     public strength:number
   ) {
    // this.name = name;
    // this.health = health;
    // this.strength = strength;
  }
  receiveDamage(dmg: number) {
    this.health -= dmg;
    console.log("FOR ODIN!")
  }
}

class Samurai implements WarriorInterface {
  constructor(
    public sword: string,
    public health: number,
    public strength: number
  ) {}
  receiveDamage(dmg:number) {
    this.health -= dmg;
    console.log("You fight honorably.")
  }
}

const mySoldier = new Soldier(100, 25);

const ragnarr = new Viking("Ragnarr", 100, 25);

const hanzo = new Samurai("Nodachi", 100, 25);
console.log( hanzo.health )


interface WarriorInterface {
  health: number;
  strength: number;

  receiveDamage(dmg: number);
}


function fight (warriorA: WarriorInterface, warriorB: WarriorInterface) {
  warriorA.receiveDamage( warriorB.strength );
  warriorB.receiveDamage( warriorA.strength );

  console.log(`After the fight: ${warriorA.health} vs ${warriorB.health}`)
}

fight(ragnarr, hanzo);
fight(mySoldier, ragnarr)

class PacifistHippie {
  constructor(
    public health: number,
    public cause: string
  ) {}

  receiveDamage(dmg: number) {
    this.health -= dmg;
    console.log("Ow that hurts, man!")
  }
}

const sunFlower = new PacifistHippie(50, "The Rainforest");

// fight(sunFlower, ragnarr);
