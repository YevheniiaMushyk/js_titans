let toTop = document.getElementById('toTop');
toTop.style.display = 'none';
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    toTop.style.display = 'block';
  } else {
    toTop.style.display = 'none';
  }
});

toTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
