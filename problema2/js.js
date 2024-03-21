document.querySelectorAll('.ima').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.imagenG').src = item.src; // Cambia la imagen grande.
        document.getElementById('imageTitle').textContent = item.alt; // Cambia el título.
        document.getElementById('imageDescription').textContent = item.getAttribute('data-description'); // Cambia la descripción.
    });
});
