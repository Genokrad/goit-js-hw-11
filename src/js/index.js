import { queryToPixabay, getMoreImages } from './fetch_utils.js';
import SimpleLightbox from 'simplelightbox';

export const getEl = el => document.querySelector(el);

getEl('.search-form').addEventListener('submit', queryToPixabay);

getEl('.load-more').addEventListener('click', getMoreImages);

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
