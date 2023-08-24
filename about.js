let scrollToTopBtn = document.getElementById('scrollToTop')

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
function handleScroll() {
  if (window.scrollY >= 100) {
    scrollToTopBtn.style.display = 'block'
  } else {
    scrollToTopBtn.style.display = 'none'
  }
}
window.addEventListener('scroll', handleScroll)

scrollToTopBtn.addEventListener('click', scrollToTop)
