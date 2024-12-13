// Define the names array
const names = ['John', 'Paul', 'Jones'];

// Get the element with id "target"
let targetElement = document.getElementById('target');

// Initialize an empty string to store the HTML
let listItems = '';

// Use a for loop to iterate over the names array and create list items
for (let i = 0; i < names.length; i++) {
    listItems += `<li>${names[i]}</li>`;  // Add a list item for each name
}

// Set the innerHTML of the target element to the list items
targetElement.innerHTML = listItems;
