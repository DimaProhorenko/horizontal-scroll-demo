const scrollContainer = document.querySelector('.main');

document.addEventListener('wheel', e => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
}, {passive: false})