const modal = document.getElementById('carModal');
const modalContent = document.getElementById('modalContent');
const closeButton = document.querySelector('.close-button');

function openModal(car) {
    modalContent.innerHTML = createCarDetails(car);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeButton.onclick = closeModal;

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};