// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const myGallery = document.querySelector('.gallery');
const insertGalleryItem = (preview, original, description) =>
  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

galleryItems.forEach(element => {
  myGallery.insertAdjacentHTML(
    'beforeend',
    insertGalleryItem(element.preview, element.original, element.description),
  );
});

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);