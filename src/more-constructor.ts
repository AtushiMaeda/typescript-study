export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('あつさん', 40);
console.log(me);
