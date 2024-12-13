// Array containing data for the articles
const picArray = [
    {
        title: "Mountain View",
        image: "https://images.desenio.com/zoom/11636_2-38801.jpg?auto=compress%2Cformat&fit=max&w=3840",
        caption: "A beautiful view of the mountain",
        description: "The mountain view is stunning during sunrise, with vibrant colors lighting up the sky."
    },
    {
        title: "City Skyline",
        image: "https://as2.ftcdn.net/v2/jpg/01/13/86/91/1000_F_113869179_n9AjMU68958Pom6wUHxavWCQoXiKofDR.jpg",
        caption: "A busy city skyline",
        description: "The city skyline is filled with skyscrapers, and the lights shine bright at night."
    },
    {
        title: "Forest Path",
        image: "https://images.pexels.com/photos/1719627/pexels-photo-1719627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        caption: "A calm forest path",
        description: "The forest path is peaceful, surrounded by towering trees and the sound of birds chirping."
    }
];

// Get the section element where articles will be added
let section = document.getElementById('articles-section');

// Loop through the picArray and create article elements
picArray.forEach(pic => {
    // Create the article element
    let article = document.createElement('article');
    article.classList.add('card');

    // Create the heading (h2)
    let heading = document.createElement('h2');
    heading.textContent = pic.title;

    // Create the figure element
    let figure = document.createElement('figure');

    // Create the image element
    let image = document.createElement('img');
    image.src = pic.image;
    image.alt = pic.title;

    // Create the figcaption element
    let figcaption = document.createElement('figcaption');
    figcaption.textContent = pic.caption;

    // Append the image and figcaption to the figure
    figure.appendChild(image);
    figure.appendChild(figcaption);

    // Create the description paragraph
    let description = document.createElement('p');
    description.textContent = pic.description;

    // Append all the elements to the article
    article.appendChild(heading);
    article.appendChild(figure);
    article.appendChild(description);

    // Add the article to the section
    section.appendChild(article);
});
