// script.js

document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');
  const indicators = document.querySelectorAll('.slide-indicator span');
  const imgContainers = document.querySelectorAll('.slider-img-container');
  let currentIndex = 0;

  function updateSlider(index) {
    const offset = index * -100;
    sliders.forEach((slider) => {
      slider.style.transform = `translateX(${offset}%)`;
    });
    indicators.forEach((indicator) => {
      indicator.classList.remove('active');
    });
    indicators[index].classList.add('active');
  }

  indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
      const index = parseInt(indicator.dataset.index);
      currentIndex = index;
      updateSlider(index);
    });
  });

  imgContainers.forEach((imgContainer) => {
    imgContainer.addEventListener('click', () => {
      const index = parseInt(imgContainer.dataset.index);
      currentIndex = index;
      updateSlider(index);
    });
  });

  // Initial display
  updateSlider(currentIndex);
});

function redirectToPage(url) {
  window.location.href = url;
}

document
  .querySelector('.button-registrer')
  .addEventListener('click', function () {
    redirectToPage('./sign-up.html');
  });

function showPopup() {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}
