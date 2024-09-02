// Question 1


let arr = [7, 2, 3];
let firstElement = arr[0];
let isPrime = true;

if (firstElement <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(firstElement); i++) {
        if (firstElement % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${firstElement} is a prime number`);
} else {
    console.log(`${firstElement} is not a prime number`);
}
