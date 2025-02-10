function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or handle the error in a more appropriate way
  }
  return numA + numB;
}

const result1 = add(5, 10); // Correct: 15
const result2 = addSafe(5, '10'); // Correct: 15
const result3 = addSafe('5', '10'); // Correct: 15
const result4 = addSafe('hello', 10); // Correct: 0 (handles error)
console.log(result1,result2,result3,result4);