// Get the form and target paragraph elements
const form = document.getElementById('nameForm');
const target = document.getElementById('target');

// Add an event listener for the form submit event
form.addEventListener('submit', function(event) {
    // Prevent the default form submission action (page reload)
    event.preventDefault();

    // Get the values of the first and last name using querySelector
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;

    // Display the message in the target paragraph
    target.textContent = `Your name is ${firstName} ${lastName}`;
});
