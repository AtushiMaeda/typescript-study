export {};

enum Months {
  January = 1,
  Feburary,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  Octorber,
  November,
  December,
}

console.log(Months.January);
console.log(Months.Feburary);
console.log(Months.December);

enum Colors {
  Red = '#FF0000',
  White = '#FFFFFF',
  Green = '#008800',
  Blue = '#0000FF',
  // Yellow = '#FFFF00',
  Black = '#000000',
}

let green = Colors.Green;
console.log({ green });

enum Colors {
  Yellow = '#FFFF00',
  Gray = '#808080'
}
Colors.Yellow;
