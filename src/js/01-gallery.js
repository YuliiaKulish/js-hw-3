import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryListRef = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>  `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
    `
  )
  .join('');

galleryListRef.innerHTML += markup;

galleryListRef.style.listStyle = 'none';
galleryListRef.style.padding = '0';

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
