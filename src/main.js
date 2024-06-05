import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import userGallery from './js/pixabay-api';
import addImages from './js/render-functions';
import { perPage } from './js/pixabay-api';

const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.js-load-more');
let myPage = 1;
let userSearch;

iziToast.settings({
  progressBar: false,
  timeout: 4000,
  resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',
});

const showLoader = () => loader.classList.remove('is-hidden');
const hideLoader = () => loader.classList.add('is-hidden');
const showBtn = () => loadMoreBtn.classList.remove('is-hidden');
const hideBtn = () => loadMoreBtn.classList.add('is-hidden');

const onSubmit = async event => {
  event.preventDefault();
  userSearch = event.target.elements.search.value.trim();
  if (!userSearch) return;
  showLoader();
  hideBtn();
  gallery.innerHTML = '';

  try {
    myPage = 1;
    const response = await userGallery(userSearch, myPage);
    if (response.hits.length === 0) {
      hideBtn();
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      addImages(response);
      if (response.totalHits > perPage) {
        showBtn();
      }
    }
  } catch (error) {
    iziToast.error({
      message: `Error: ${error.message}`,
    });
  } finally {
    event.target.reset();
    hideLoader();
  }
};

const onClick = async () => {
  myPage += 1;

  try {
    const response = await userGallery(userSearch, myPage);
    const totalPages = Math.ceil(response.totalHits / perPage);

    showLoader();
    addImages(response);
    scroll();

    if (myPage >= totalPages) {
      hideBtn();
      iziToast.error({
        position: 'topRight',
        message: "We're sorry, there are no more posts to load",
      });
    }
  } catch (error) {
    iziToast.error({
      message: `Error: ${error.message}`,
    });
  } finally {
    hideLoader();
  }
};

form.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onClick);

const scroll = () => {
  const galleryItem = document.querySelector('.gallery-item');
  if (galleryItem) {
    const itemHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
      top: itemHeight * 2,
      behavior: 'smooth',
    });
  }
};
