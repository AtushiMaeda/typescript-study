export {};

class VisaCard {
  constructor(public owner: string) {}
}

let myVisaCard = new VisaCard('あつさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ham'
