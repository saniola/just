const profileImages = document.querySelectorAll('.team-member-image');
const placeholder = '/images/profile-placeholder.webp';

profileImages.forEach(img => {
  const imgSrc = img.src;

  img.onerror = function() {
    img.src = placeholder;
    img.srcset = placeholder;
  };

  const testImg = new Image();
  testImg.src = imgSrc;
  testImg.onerror = function() {
    img.onerror();
  };
});
