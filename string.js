function swapCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }
    return result;
}

// Test the function and display the output
const inputString = 'The Quick Brown Fox';
const outputElement = document.getElementById('output');
outputElement.textContent = swapCase(inputString);