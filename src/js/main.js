import { initIconPathObserver } from './icon-path-updater';
import { calcScrollValue } from './scroll-to-top';
import './handle-email-form';
import './mobile-menu';

document.addEventListener('DOMContentLoaded', async () => {
  initIconPathObserver();

  const path = window.location.pathname;
  const scrollProgress = document.querySelector('.scroll-to-top');

  if (path.endsWith('index.html')) {
      document.querySelector('.toggle-btn-home').classList.add('active');
  } else if (path.endsWith('portfolio.html')) {
      document.querySelector('.toggle-btn-portfolio').classList.add('active');
  }

  scrollProgress.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });
});

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
