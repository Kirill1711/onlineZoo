const map = document.getElementById('map');
const zoomInBtn = document.querySelector('.zoomIn');
const zoomOutBtn = document.querySelector('.zoomOut');

let scale = 1;
const minScale = 0.8;
const maxScale = 1.6;
const step = 0.2;

function updateScale(newScale) {
    scale = Math.max(minScale, Math.min(maxScale, newScale));
    map.style.transform = `scale(${scale})`;
}

zoomInBtn.addEventListener('click', () => {
    updateScale(scale + step);
});

zoomOutBtn.addEventListener('click', () => {
    updateScale(scale - step);
});