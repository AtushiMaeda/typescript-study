export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrrr';
  }
}

let lion = new Lion();
let tiger = new Tiger();

console.log(lion.cry());
console.log(tiger.cry());
