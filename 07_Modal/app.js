const btnOpenModal = document.querySelector('.btn-open-modal');
const btnCloseModal = document.querySelector('.btn-close-modal');
const modalOverlay = document.querySelector('.modal-overlay');

// Open Modal
btnOpenModal.addEventListener('click', function() {
    modalOverlay.classList.add('open-modal');
});

// Close Modal
btnCloseModal.addEventListener('click', function() {
    modalOverlay.classList.remove('open-modal');
});