function calculate() {
    // Get the input value from the user
    const input = document.getElementById('calculation').value;

    // Check if the input contains any of the four basic operators (+, -, *, /)
    if (input.includes('+') || input.includes('-') || input.includes('*') || input.includes('/')) {
        // Split the input into two numbers and the operator
        let operator;
        if (input.includes('+')) {
            operator = '+';
        } else if (input.includes('-')) {
            operator = '-';
        } else if (input.includes('*')) {
            operator = '*';
        } else if (input.includes('/')) {
            operator = '/';
        }

        const parts = input.split(operator); // Split the input based on the operator
        const num1 = parseInt(parts[0], 10); // First number
        const num2 = parseInt(parts[1], 10); // Second number

        // Perform the calculation
        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = "Invalid operator";
        }

        // Display the result
        document.getElementById('result').textContent = result;

    } else {
        // Handle invalid input
        document.getElementById('result').textContent = "Please enter a valid calculation (e.g., 3+5).";
    }
}
