const images = [
    'ac2.jpg', 
    'ac3.jpg', 
    'homepage.jpg'
];

const altText = {
    'ac2.jpg': 'b&w portrait: freddy',
    'ac3.jpg': 'b&w portrait: chay',
    'homepage.jpg': 'b&w portrait: jo',
}

let currentImageIndex = 0;

const displayedImage = document.getElementById('current-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update the image and alt text
function updateImage(index) {
    displayedImage.src = 'images/' + images[index];
    displayedImage.alt = altText[images[index]];
}

// Event listeners for next/previous buttons
prevBtn.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    updateImage(currentImageIndex);
});

nextBtn.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    updateImage(currentImageIndex);
});