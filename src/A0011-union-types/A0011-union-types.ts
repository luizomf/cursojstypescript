function addOrConcat(
  a: number | string | boolean,
  b: number | string | boolean,
): string | number {
  if (typeof a === 'string' && typeof b === 'string') return a + b;
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20'));
console.log(addOrConcat('10', 20));
