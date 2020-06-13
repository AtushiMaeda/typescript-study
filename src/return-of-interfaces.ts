export {};

class Wizard {}
class Priest {}

class Taro extends Wizard {}

interface Sage {
  ionazun(): void;
}

interface Warrior {
  kougeki(): void;
}

class Jiro implements Sage, Warrior {
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
