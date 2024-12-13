// Get references to the paragraph and the image elements
const trigger = document.getElementById('trigger');
const target = document.getElementById('target');

// When the mouse hovers over the paragraph, change the image
trigger.addEventListener('mouseover', function() {
    target.src = 'https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D195580936W8333H10000/views/1,width=800,height=800,appearanceId=839,backgroundColor=F2F2F2/number-4-sticker.jpg';  // Change the image to picB.jpg
});

// When the mouse leaves the paragraph, change the image back to picA.jpg
trigger.addEventListener('mouseout', function() {
    target.src = 'https://i.etsystatic.com/20341642/r/il/1066b7/2524627264/il_570xN.2524627264_8sts.jpg';  // Change the image back to picA.jpg
});
