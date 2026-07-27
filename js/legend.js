// Odkazy na prvky
const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');
const modalOverlay = document.getElementById('modal-overlay');

// Funkce pro zobrazení modálního okna
openModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'block';
});

// Funkce pro zavření modálního okna
closeModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

// Zavření při kliknutí mimo okno
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});