import { initIconPathObserver } from './icon-path-updater';
import { calcScrollValue } from './scroll-to-top';
import './handle-email-form';
import './mobile-menu';
import './handle-team-member-placeholder';

document.addEventListener('DOMContentLoaded', async () => {
  initIconPathObserver();

  const path = window.location.pathname;
  const scrollProgress = document.querySelector('.scroll-to-top');

  if (path.endsWith('portfolio.html')) {
    document.querySelector('.toggle-btn-portfolio').classList.add('active');
  } else {
    document.querySelector('.toggle-btn-home').classList.add('active');
  }

  scrollProgress.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });

  const refs = {
    openModalBtnArray: document.querySelectorAll('[data-modal-open]'),
    closeModalBtnArray: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  function toggleModal() {
    console.log('refs.modal', refs.modal); // eslint-disable-line
    refs.modal.classList.toggle('is-hidden');
  }

  console.log('refs.modal', refs.modal); // eslint-disable-line

  refs.openModalBtnArray.forEach(btn => {
    console.log('btn1', btn); // eslint-disable-line
    btn.addEventListener('click', toggleModal);
  });
  refs.closeModalBtnArray.forEach(btn => {
    console.log('btn', btn); // eslint-disable-line
    btn.addEventListener('click', toggleModal);
  });
});

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
