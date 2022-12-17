import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(SimpleLightbox);
console.log(galleryItems);

const galleryImages = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryImages(galleryItems);

galleryImages.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createGalleryImages(galleryItems) {
  return galleryItems.map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
			<img class="gallery__image" src="${preview}" alt="${description}"/>
			</a>`).join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
