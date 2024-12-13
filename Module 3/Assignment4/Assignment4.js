// Define the students array with name-value pairs
const students = [
    { value: '2345768', name: 'John' },
    { value: '2134657', name: 'Paul' },
    { value: '5423679', name: 'Jones' }
];

// Get the element with id "target"
let targetElement = document.getElementById('target');

// Use a for loop to iterate over the students array and create <option> elements
for (let i = 0; i < students.length; i++) {
    // Create a new <option> element
    let optionElement = document.createElement('option');
    
    // Set the value and text of the <option> element
    optionElement.value = students[i].value;
    optionElement.textContent = students[i].name;
    
    // Append the <option> element to the target <select> element
    targetElement.appendChild(optionElement);
}
