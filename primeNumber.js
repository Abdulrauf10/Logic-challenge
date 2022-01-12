// Given a variable value is a number with 120 digits length, write a php function to identify the first 10-digit prime number

for (let i = 1; i <= 120; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}