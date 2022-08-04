// O(n^2)

const logItems = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}

// Since this loop will run inside of the other loop, it will be raised to the power of two. And it doesn't matter if this is looped 2, 5, or 1000 times, its going to still be O(n^2).
