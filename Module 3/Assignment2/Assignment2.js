// Get the element with id "target"
let targetElement = document.getElementById('target');

// Create list items
let firstItem = document.createElement('li');
firstItem.textContent = 'First item'; // Set text for the first item

let secondItem = document.createElement('li');
secondItem.textContent = 'Second item'; // Set text for the second item

let thirdItem = document.createElement('li');
thirdItem.textContent = 'Third item'; // Set text for the third item

// Add class "my-item" to the second list item
secondItem.classList.add('my-item');

// Append the items to the target element
targetElement.appendChild(firstItem);
targetElement.appendChild(secondItem);
targetElement.appendChild(thirdItem);
