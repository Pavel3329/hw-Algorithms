// task #1

let n = 5;

if (n == 1) {
    return;
}
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        console.log("*");
        break;
    }
}
// O(n)

// .......................................

// task #2

let n = 10;
let i = 0;
let j = 0;
let a = 0;

for (i = (n / 2); i <= n; i = i + 1) {
    for (j = 2; j <= n; j = j * 2) {
        a = a + n / 2;
    }
}

// O(n log n).

// .......................................

// task #3

let n = 5;
let a = 0;

for (let i = 0; i < n; i ++) {
    for (let j = n; j > i; j --) {
        a = a + i + j;
    }
}
return a;


// O(n ^ 2).

// .......................................

// task #4

let n = 10;
let a = 0;
let i = n;

while (i > 0) {
    a = a + i;
    i = (i / 2);
}
// O(log n)




