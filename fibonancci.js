 //Implement a php function that returns the fibonacci number at a given index.

 let fibonacci = [0, 1];

for (let i = 2; i < 10; ++i) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}

console.log(fibonacci); 