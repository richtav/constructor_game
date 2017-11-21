class shinobi {
  constructor(speed, element, rank, ninjutsu, taijutsu, genjutsu) {
    this.speed = speed;
    this.element = element;
    this.rank = rank;
    this.ninjutsu = ninjutsu;
    this.taijutsu = taijutsu;
    this.genjutsu = genjutsu;
  }


  sayHi() {
    console.log("Hello I am a " + this.element + " " + this.rank);
  }
}

function arena(shinobi1, shinobi2) {
  shinobi1.sayHi();
  shinobi2.sayHi();

  if (shinobi1.speed > shinobi2.speed) {
    console.log(shinobi1.rank + " Wins!!");
  } else if (shinobi1.ninjutsu > shinobi2.ninjustu) {
    console.log(shinobi2.rank + " Wins!!");
  } else {
    console.log(shinobi1.rank + " and " + shinobi2.rank + " tie!");
  }
}

var hokage = new shinobi(100, "earth", "Hokage", 150, 150, 150);
var rogue = new shinobi(80, "fire", "rogue", 140, 130, 150);
var chunin = new shinobi(60, "lightning", "chunin", 130, 130, 130);

arena(hokage, rogue);
