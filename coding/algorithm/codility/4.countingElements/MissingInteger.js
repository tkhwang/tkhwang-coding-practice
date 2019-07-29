// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// 66 %
function solution(A) {
  const max = Math.max(...A);
  if (max < 0) return 1;
  for (let i = 1; i <= max; i += 1) {
    if (A.indexOf(i) === -1) return i;
  }
  return max + 1;
}

// 100 %
function solution(A) {
  const hash = {};
  A.map(value => (hash[value] = true));

  let smallest = 1;

  while (hash[smallest]) {
    smallest += 1;
  }

  return smallest;
}