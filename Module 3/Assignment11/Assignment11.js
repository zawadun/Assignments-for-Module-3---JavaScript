// Array containing image details (medium and large images)
const picArray = [
    {
        medium: 'medium_image1.jpg',
        large: 'large_image1.jpg',
        description: 'Large Image 1'
    },
    {
        medium: 'medium_image2.jpg',
        large: 'large_image2.jpg',
        description: 'Large Image 2'
    }
];

// Get references to the modal, close button, and modal image
const modal = document.getElementById('imageModal');
const closeBtn = document.getElementById('closeBtn');
const modalImage = document.getElementById('modalImage');

// Get all the article elements
const articles = document.querySelectorAll('article');

// Add event listeners to all articles
articles.forEach((article, index) => {
    article.addEventListener('click', function() {
        // When an article is clicked, open the modal and show the large image
        modalImage.src = picArray[index].large;
        modalImage.alt = picArray[index].description;
        modal.showModal();
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function() {
    modal.close();
});
