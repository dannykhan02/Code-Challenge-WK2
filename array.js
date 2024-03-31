function generateArrayBetween(num1, num2) {
    // Calculate the length of the range between num1 and num2
    let rangeLength =(num2 - num1) + 1;

    // Create an empty array to store the generated numbers
    let resultArray = [];

    // Loop to generate numbers between num1 and num2
    for (let i = 0; i < rangeLength; i++) {
        // Calculate the current number based on num1 and the loop index
        let currentNumber = num1 + i;
        
        // Add the current number to the result array
        resultArray.push(currentNumber);
    }

    // Return the generated array
    return resultArray;
}

// Test cases
console.log(generateArrayBetween(4, 7)); // Output: [4, 5, 6, 7]
console.log(generateArrayBetween(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]