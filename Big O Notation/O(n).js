// O(n)

function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
}

logItems(10)

// We pass the function, the number 'n', and the outcome in the console ran 'n' times. The number of operations will always be proportional to whatever n is.

// DROP THE CONSTANT vvvvvv

function logNewItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
  for (let j = 0; j < n; j++) {
    console.log(j)
  }
}

logNewItems(3)

//Our code will run 2 times, also seen as 'n + n', or '2n'. But that doesn't matter, could be 2n, 5n, 100n, but we always drop the constant and it will be seen as O(n).
