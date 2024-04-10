
const images = [
    'https://res.cloudinary.com/dmhzy7p8q/image/upload/v1709063490/WhatsApp-Image-2024-02-27-at-19.28.29_swnp8r.png',
    'https://res.cloudinary.com/dmhzy7p8q/image/upload/v1709063490/WhatsApp-Image-2024-02-27-at-19.28.31_upvyyg.png',
    'https://res.cloudinary.com/dmhzy7p8q/image/upload/v1709063490/WhatsApp-Image-2024-02-27-at-19.28.37-_1__a4r44l.png'
];

let currentImageIndex = 0;

const galleryImage = document.querySelector('.gallery-image');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

function updateImage() {
    galleryImage.src = images[currentImageIndex];
}

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});

updateImage();
