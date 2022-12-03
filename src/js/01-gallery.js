import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');
const lightBox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
const marcup = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    acc +
    ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`,
  ''
);
galleryRef.insertAdjacentHTML('beforeend', marcup);
lightBox.refresh();
