export {};

type St = string;

const fooString: string = 'Hello';
const barString: St = 'Hello';

const example1 = {
  name: 'Atsu',
  age: 40
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Atsu',
  age: 40
};

type Profile2 = typeof example1;
