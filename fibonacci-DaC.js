function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

for (let i = 1; i <= 11; i++) {
  console.log(fib(i));
}



function fib(n, memo = {}) {
  if (n in memo) return memo[n];     // уже считали → возвращаем
  if (n === 1 || n === 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

for (let i = 1; i <= 11; i++) {
  console.log(fib(i));
}