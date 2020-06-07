export {};

const numFunc = (): number => 43;

let numberAny: any = numFunc();
let numberUnknown: unknown = numFunc();

let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
