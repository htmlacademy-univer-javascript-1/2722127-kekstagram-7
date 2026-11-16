import { createPhotos } from './data.js';
import { renderPictures } from './render-thumbnails.js';
import { showBigPicture } from './big-picture.js';

const photosCount = 25;

const photos = createPhotos(photosCount);

renderPictures(photos, showBigPicture);
