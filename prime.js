// Function to check if a number is prime
function isPrime(num) {
    // If the number is less than or equal to 1, it's not prime
    if (num <= 1) return false;
    
    // Loop through potential divisors from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // If the number is divisible by any divisor, it's not prime
        if (num % i === 0) return false;
    }
    // If the number is not divisible by any divisor, it's prime
    return true;
}

// Function to filter prime numbers from an array
function filterPrimesFromArray(arr) {
    // Use the filter method to create a new array containing only prime numbers
    return arr.filter(num => isPrime(num));
}

// Function to display the prime numbers on the webpage
function displayOutput() {
    // Array of numbers to filter prime numbers from
    const numbersArray = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32];
    // Filter prime numbers from the array
    const primeNumbers = filterPrimesFromArray(numbersArray);
    // Display the prime numbers in the HTML element with id "output"
    document.getElementById("output").innerText = primeNumbers.join(", ");
}