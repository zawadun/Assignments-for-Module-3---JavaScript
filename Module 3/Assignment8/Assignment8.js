// Get references to HTML elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const resultParagraph = document.getElementById('result');
const calculateButton = document.getElementById('calculate');

// Function to perform the calculation based on the selected operation
calculateButton.addEventListener('click', function() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        resultParagraph.textContent = "Please enter valid numbers in both fields.";
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultParagraph.textContent = "Cannot divide by zero!";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultParagraph.textContent = "Please select a valid operation.";
            return;
    }

    resultParagraph.textContent = "Result: " + result;
});
